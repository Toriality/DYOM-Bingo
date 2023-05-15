import { generateRandomString } from "../utils.js";

export const seed = {
  div: null,
  seedString: null,
  string: null,
  value: null,

  createIn(div) {
    const seedInputDiv = document.createElement("div");
    const seedLabel = document.createElement("label");
    const seedInput = document.createElement("input");
    const shareText = document.createElement("span");

    seedLabel.innerText = "Seed:";
    seedInputDiv.id = "seedInput";
    seedInput.id = "_seed";
    seedInput.type = "text";
    seedInput.addEventListener("input", (e) => this.set(e.target.value));
    shareText.innerText = "Share";
    shareText.addEventListener("click", this.copy);

    this.div = { seedInput, shareText };

    seedInputDiv.appendChild(seedLabel);
    seedInputDiv.appendChild(seedInput);
    div.appendChild(seedInputDiv);
    div.appendChild(shareText);
  },

  update() {
    this.div.seedInput.value = this.string;
  },

  // This function should be called on page load since it detects the URL seed parameter,
  // and creates a seed based on it. If no seed parameter is given, a random seed is generated.
  init() {
    const seedParam = new URLSearchParams(window.location.search).get("seed");
    if (seedParam) this.set(seedParam);
    else this.set(generateRandomString());
  },

  get() {
    return { string: this.string, value: this.value };
  },

  set(seed) {
    const seedString = seed;
    const seedValue = new Math.seedrandom(seed);

    this.string = seedString;
    this.value = seedValue();
  },

  copy() {
    const text = `
    ${window.location.href}?seed=${seed.div.seedInput.value}`;
    navigator.clipboard.writeText(text);

    // Wait 200ms to show alert, otherwise it will throw a "Document not focused" error
    setTimeout(() => {
      alert("The link has been copied to your clipboard!");
    }, 200);
  },
};
