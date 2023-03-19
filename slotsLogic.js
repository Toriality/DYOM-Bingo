import {slots} from "./slotsData.js"


export const slotsLogic = {
    getCount: () => {
        return slots.length;
    },



  //Generate random 5*5 slots, excluding selected options and currently displayed tiles
  generate: (requirements, current) => {
      //Filter out slots which require selected options, so there is no need to check for that later
      let filteredSlots = slots;
      requirements.forEach(
        (req) =>
          (filteredSlots = filteredSlots.filter(
            (slot) => slot.requires == undefined || !slot.requires.includes(req)
          ))
      );


      //Filter out slots which are displayed right now, so slots don't repeat as often
      current.forEach(
        (exSlot) =>
          (filteredSlots = filteredSlots.filter(
            (slot) => slot.string != exSlot.innerText
          ))
      );
      //Create an array which will hold selected slots
      let newSlots = new Array();

      for(let i=0; i<5*5; i++){
        let randomSlot =
          filteredSlots[Math.floor(Math.random() * filteredSlots.length)];
            //Instead of retrying each time the same thing was chosen, just filter out chosen slot so it cannot be chosen again
        filteredSlots = filteredSlots.filter(
          (slot) => slot.string != randomSlot.string
        );
        newSlots.push(randomSlot);

      }
      return newSlots;
    }
}
