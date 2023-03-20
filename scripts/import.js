async function loadHeader() {
  const response = await fetch("/components/header.html");
  const text = await response.text();
  document.querySelector("header").innerHTML = text;
}

async function loadFooter() {
  const response = await fetch("/components/footer.html");
  const text = await response.text();
  document.querySelector("footer").innerHTML = text;
}

loadHeader();
loadFooter();
