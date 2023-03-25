import { slots as slotsData } from "../data/slots.js";

export const slots = {
  currentSlots: [],

  //Filter out slots which require selected options,
  //so there is no need to check for that later
  set(requirements) {
    let filteredSlots = slotsData;
    requirements.forEach(
      (req) =>
        (filteredSlots = filteredSlots.filter(
          (slot) => slot.requires === undefined || !slot.requires.includes(req)
        ))
    );

    //Create an array which will hold selected slots
    const newSlots = new Array();

    for (let i = 0; i < 5 * 5; i++) {
      const randomSlot =
        filteredSlots[Math.floor(Math.random() * filteredSlots.length)];
      //Instead of retrying each time the same thing was chosen,
      //just filter out chosen slot so it cannot be chosen again
      filteredSlots = filteredSlots.filter(
        (slot) => slot.string != randomSlot.string
      );
      newSlots.push(randomSlot);
    }

    slots.currentSlots = newSlots;
  },

  get() {
    return slots.currentSlots;
  },
};
