async function loadHeader() {
  const target = document.querySelector("header");

  const response = await fetch("./components/header.html");
  const text = await response.text();
  target.innerHTML = text;

  //Since the header is present in every page
  //Append theme script to it so that the theme is loaded in every page
  const script = document.createElement("script");
  script.src = "./scripts/site/theme.js";
  script.type = "module";

  target.appendChild(script);
}

async function loadFooter() {
  const response = await fetch("./components/footer.html");
  const text = await response.text();
  document.querySelector("footer").innerHTML = text;
}

loadHeader();
loadFooter();
