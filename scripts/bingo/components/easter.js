export const easter = {
  check(seed) {
    switch (seed) {
      case "marquee":
        return this.marquee();
      default:
        return;
    }
  },

  marquee() {
    const logo = document.querySelector("header a");
    // This check is necessary because the header fetched after the game is initialized,
    // a better approach should be used in the future
    if (logo) {
      logo.outerHTML = `<marquee scrollamount="25">${logo.outerHTML}</marquee>`;
    }
  },
};
