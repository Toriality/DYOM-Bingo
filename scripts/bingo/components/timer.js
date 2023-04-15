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

  //Creates timer text element
  createIn(div) {
    const timerDiv = document.createElement("div");
    timerDiv.id = "timerString";
    timerDiv.innerText = "Time: Click on a tile to start";
    timerDiv.title = "Click to pause/resume";
    timerDiv.addEventListener("click", timer.pause);
    div.appendChild(timerDiv);
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
    timer.display(time);
  },

  getTime() {
    const time = Date.now() - timer.startTime;
    return time;
  },

  restart() {
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
    timer.startTime = Date.now();
    if (timer.state === "waiting") {
      timer.display(timer.getTime(), timer.getPB());
      timer.tickReference = setInterval(timer.tick, 200);
      timer.state = "running";
    }
  },

  //Stops the timer
  pause() {
    if (timer.state === "won") return;
    if (timer.state === "paused" || timer.state === "waiting") return timer.resume();
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
    if (timer.state === "paused") timer.startTime = Date.now() - timer.pauseTime;
    if (timer.tickReference === null) timer.tickReference = setInterval(timer.tick, 200);
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

  // Displays the time and PB in the timer div
  display(now, pb) {
    const timerDiv = document.getElementById("timerString");
    let timerSpan = document.getElementById("timerSpan");
    let pbSpan = document.getElementById("pbSpan");

    const currentTimeString = `${toHours(now)}:${toMinutes(now)}:${toSeconds(now)}<br>`;

    let pbTimeString;
    // This is called when the player doesn't have a PB yet
    if (pb === null) pbTimeString = "PB: Not set yet";
    // This is called by default, when the pb param is not set
    else if (pb === undefined) pbTimeString = false;
    // This is called on win, when the pb param is set and possibly changed
    else pbTimeString = `PB: ${toHours(pb)}:${toMinutes(pb)}:${toSeconds(pb)}`;

    // Called at start to create timer and pb spans
    if (!timerSpan && !pbSpan) {
      timerDiv.innerHTML = "";
      timerSpan = document.createElement("span");
      pbSpan = document.createElement("span");
      timerSpan.id = "timerSpan";
      pbSpan.id = "pbSpan";
      timerDiv.appendChild(timerSpan);
      timerDiv.appendChild(pbSpan);
    }

    // Update timer only when it has changed (every second)
    if (timerSpan.innerHTML.indexOf(currentTimeString) === -1) {
      timerSpan.innerHTML = `Time: ${currentTimeString}`;
    }

    // Update PB only when it has changed
    if (pbTimeString && pbSpan.innerHTML.indexOf(pbTimeString) === -1) {
      pbSpan.innerHTML = pbTimeString;
    }
  },
};
