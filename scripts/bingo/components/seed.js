import { generateRandomString } from "../utils.js";

export const seed = {
  string: null,
  value: null,

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
};
