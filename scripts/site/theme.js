// Toggle dark theme class on elements
const toggleTheme = (elements, add) => {
  elements.forEach((element) => {
    if (element) {
      if (add) element.classList.add("dark");
      else element.classList.remove("dark");
    }
  });
};

// Watch for newly added elements and apply current theme to them
const watchTheme = () => {
  const callback = (mutationList, observer) => {
    for (const mutation of mutationList) {
      if (mutation.type === "childList") {
        theme.apply();
      }
    }
  };
  const observer = new MutationObserver(callback);
  const historyBox = document.getElementById("historyBox");
  const modal = document.getElementById("modal");
  if (historyBox && modal) {
    observer.observe(historyBox, {
      childList: true,
      subtree: true,
    });
    observer.observe(modal, {
      childList: true,
      subtree: true,
    });
  }
};

const theme = {
  // Initialize theme configuration
  init() {
    // Theme switch button
    const themeIcon = document.getElementById("themeIcon");
    themeIcon.addEventListener("click", () => {
      theme.set();
    });
    // Apply current theme
    theme.apply();
    // Watch for DOM changes
    watchTheme();
  },

  // Get current theme
  get() {
    // If no theme is set, return default theme (light)
    let thisTheme = localStorage.getItem("theme") || "light";
    return thisTheme;
  },

  // Change current theme to another one
  set() {
    let thisTheme = theme.get();
    if (thisTheme === "light") thisTheme = "dark";
    else thisTheme = "light";
    localStorage.setItem("theme", thisTheme);
    theme.apply();
  },

  // Apply visuals to elements
  apply() {
    const thisTheme = theme.get();

    // Change background
    const background = document.querySelector("html");
    background.style.backgroundImage = `url("./images/background_${thisTheme}.jpg")`;

    // Apply theme to elements
    const elements = [
      document.getElementById("themeIcon"),
      document.getElementById("generate"),
      document.getElementById("reset"),
      document.getElementById("modalBox"),
      ...document.querySelectorAll("table"),
      ...document.querySelectorAll("td"),
      ...document.querySelectorAll(".textBox"),
      ...document.querySelectorAll(".formDiv"),
    ];
    if (thisTheme === "light") toggleTheme(elements, false);
    else toggleTheme(elements, true);
  },
};

theme.init();
