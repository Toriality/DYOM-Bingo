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
    if (theme == "light") {
      themeIcon.classList.remove("dark");
      generate.classList.remove("dark");
      reset.classList.remove("dark");
      for (let i = 0; i < table.length; i++) {
        table[i].classList.remove("dark");
      }
      for (let i = 0; i < textBoxElements.length; i++) {
        textBoxElements[i].classList.remove("dark");
      }
      for (let i = 0; i < formdivElements.length; i++) {
        formdivElements[i].classList.remove("dark");
      }
      for (let i = 0; i < td.length; i++) {
        td[i].classList.remove("dark");
      }
    } else {
      themeIcon.classList.add("dark");
      generate.classList.add("dark");
      reset.classList.add("dark");
      for (let i = 0; i < table.length; i++) {
        table[i].classList.add("dark");
      }
      for (let i = 0; i < textBoxElements.length; i++) {
        textBoxElements[i].classList.add("dark");
      }
      for (let i = 0; i < formdivElements.length; i++) {
        formdivElements[i].classList.add("dark");
      }
      for (let i = 0; i < td.length; i++) {
        td[i].classList.add("dark");
      }
    }
  },
};

themeIcon.addEventListener("click", () => {
  const userTheme = theme.get();

  if (userTheme === "light") {
    theme.set("dark");
  } else {
    theme.set("light");
  }
});

//Init theme
theme.set(theme.get());
