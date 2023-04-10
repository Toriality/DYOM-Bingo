import { toHours, toMinutes, toSeconds } from "../utils.js";

export const timer = {
  // "waiting", "running", "paused", "won"
  state: "waiting",

  //Time at which timer was started
  startTime: null,

  //Time at which timer was paused
  pauseTime: null,

  //setInterval reference for stopping the timer
  tickReference: null,

  //Starts te time at given time (used for loading unfinished games)
  at: null,

  //Creates timer text element
  createIn(div) {
    const span = document.createElement("span");
    span.id = "timerString";
    span.innerText = "Time: Click on a tile to start";
    span.title = "Click to pause/resume";
    span.addEventListener("click", timer.pause);
    div.appendChild(span);
  },

  startAt(time) {
    timer.at = time;
  },

  //Get PB from localStorage
  getPB() {
    if (!localStorage.getItem("PB")) return null;
    else return localStorage.getItem("PB");
  },

  //Set PB in localStorage
  setPB(time) {
    localStorage.setItem("PB", time);
  },

  //Reset PB to 0
  resetPB() {
    localStorage.removeItem("PB");
  },

  //Called each 10 ms when timer is running
  tick() {
    const time = Date.now() - timer.startTime;
    timer.display(time, timer.getPB());
  },

  getTime() {
    const time = timer.at ? timer.at : Date.now() - timer.startTime;
    return time;
  },

  restart() {
    timer.at = null;
    timer.state = "waiting";
    timer.startTime = Date.now();
    timer.pauseTime = null;
    clearInterval(timer.tickReference);
    timer.tickReference = null;
    const span = document.getElementById("timerString");
    span.innerText = "Time: Click on a tile to start";
    span.classList.remove("paused");
  },

  start() {
    timer.startTime = timer.at ? Date.now() - timer.at : Date.now();
    timer.at = null;
    if (timer.state === "waiting") {
      timer.tickReference = setInterval(timer.tick, 200);
      timer.state = "running";
    }
  },

  //Stops the timer
  pause() {
    if (timer.state === "won") return;
    if (timer.state === "paused" || timer.state === "waiting")
      return timer.resume();
    timer.pauseTime = Date.now() - timer.startTime;
    clearInterval(timer.tickReference);
    timer.tickReference = null;
    const span = document.getElementById("timerString");
    span.classList.add("paused");
    timer.state = "paused";
  },

  //Resume the timer
  resume() {
    if (timer.state === "won") return;
    if (timer.state === "waiting") return timer.start();
    if (timer.state === "paused")
      timer.startTime = Date.now() - timer.pauseTime;
    if (timer.tickReference === null)
      timer.tickReference = setInterval(timer.tick, 200);
    const span = document.getElementById("timerString");
    span.classList.remove("paused");
    timer.state = "running";
  },

  //On win stop the timer and set new PB if conditions are met
  //Then display current information
  win() {
    const span = document.getElementById("timerString");
    if (timer.state === "paused") {
      timer.startTime = Date.now() - timer.pauseTime;
      span.classList.remove("paused");
    }
    timer.state = "won";
    const time = Date.now() - timer.startTime;
    clearInterval(timer.tickReference);
    timer.tickReference = null;
    if (timer.getPB() === null || timer.getPB() > time) timer.setPB(time);
    timer.display(time, timer.getPB());
  },

  display(now, pb) {
    //Calculate current time, convert it to HH:MM:SS.MS/10 and display it
    const span = document.getElementById("timerString");

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
