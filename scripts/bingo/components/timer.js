import { toHours, toMinutes, toSeconds } from "../utils.js";

export const timer = {
  //Time at which timer was started
  startTime: null,

  //setInterval reference for stopping the timer
  tickReference: null,

  //Creates timer text element
  createIn: (div) => {
    let span = document.createElement("span");
    span.id = "timerString";
    span.innerText = "Time: Loading...";
    div.appendChild(span);
  },

  //Get PB from localstorage
  getPB: () => {
    if (!localStorage.getItem("PB")) return null;
    else return localStorage.getItem("PB");
  },

  //Set PB in localstorage
  setPB: (time) => {
    localStorage.setItem("PB", time);
  },

  //Reset PB to 0
  resetPB: () => {
    localStorage.removeItem("PB");
  },

  //Called each 10 ms when timer is running
  tick: () => {
    let time = Date.now() - timer.startTime;

    timer.display(time, timer.getPB());
  },

  getTime: () => {
    let time = Date.now() - timer.startTime;
    return time;
  },

  //Restarts the timer
  restart: () => {
    timer.startTime = Date.now();
    if (timer.tickReference == null)
      timer.tickReference = setInterval(timer.tick, 200);
  },

  //On win stop the timer and set new PB if conditions are met
  //Then display current information
  win: () => {
    let time = Date.now() - timer.startTime;
    clearInterval(timer.tickReference);
    timer.tickReference = null;
    if (timer.getPB() == null || timer.getPB() > time) timer.setPB(time);
    timer.display(time, timer.getPB());
  },

  display: (now, pb) => {
    //Calculate current time, convert it to HH:MM:SS.MS/10 and display it
    let span = document.getElementById("timerString");

    span.innerHTML = `
      Time: 
      ${toHours(now)}:${toMinutes(now)}:${toSeconds(now)}
      `;

    //The same with pb if exists
    if (pb != null) {
      span.innerHTML += `
        <br />
        PB:
        ${toHours(pb)}:${toMinutes(pb)}:${toSeconds(pb)}
        `;
    } else span.innerHTML += "<br />PB: Not set yet";
  },
};
