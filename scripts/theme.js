const toggleTheme = (elements, add) => {
  elements.forEach((element) => {
    if (add) element.classList.add("dark");
    else element.classList.remove("dark");
  });
};

const theme = {
  get: () => {
    let theme = localStorage.getItem("theme") || "light";
    return theme;
  },

  set: (theme) => {
    let themeIcon = document.getElementById("themeIcon");
    let background = document.querySelector("html");
    let textBoxElements = document.querySelectorAll(".textBox");
    let formdivElements = document.querySelectorAll(".formdiv");
    let generate = document.getElementById("generate");
    let reset = document.getElementById("reset");
    let table = document.querySelectorAll("table");
    let td = document.querySelectorAll("td");

    //Set new theme
    localStorage.setItem("theme", theme);

    //Change background image
    background.style.backgroundImage = `url("./images/background_${theme}.jpg")`;

    //Change color and other attributes
    let elements = [
      themeIcon,
      generate,
      reset,
      ...table,
      ...textBoxElements,
      ...formdivElements,
      ...td,
    ];

    if (theme == "light") toggleTheme(elements, false);
    else toggleTheme(elements, true);
  },
};

themeIcon.addEventListener("click", () => {
  const userTheme = theme.get();

  if (userTheme === "light") theme.set("dark");
  else theme.set("light");
});

//Init theme
theme.set(theme.get());
