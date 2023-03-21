export const timer = {
  //Time at which timer was started
  startTime: null,

  //setInterval reference for stopping the timer
  tickReference: null,

  //Creates timer text element
  createIn: (div) => {
    timer.startTime = Date.now();
    let span = document.createElement("span");
    span.id = "timerString";
    div.appendChild(span);
    timer.tick();
    timer.tickReference = setInterval(timer.tick, 10);
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

  //Restarts the timer
  restart: () => {
    timer.startTime = Date.now();
    if (timer.tickReference == null)
      timer.tickReference = setInterval(timer.tick, 10);
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

  display: (current, pb) => {
    //Calculate current time, convert it to HH:MM:SS.MS/10 and display it
    let span = document.getElementById("timerString");
    let hrs = Math.floor((current / (1000 * 60 * 60)) % 24)
      .toString()
      .padStart(2, "0");
    let mins = Math.floor((current / (1000 * 60)) % 60)
      .toString()
      .padStart(2, "0");
    let secs = Math.floor((current / 1000) % 60)
      .toString()
      .padStart(2, "0");
    let mils = Math.floor((current % 1000) / 10)
      .toString()
      .padStart(2, "0");

    span.innerHTML = "Time: " + hrs + ":" + mins + ":" + secs + "." + mils;
    //The same with pb if exists
    if (pb != null) {
      let pbhrs = Math.floor((pb / (1000 * 60 * 60)) % 24)
        .toString()
        .padStart(2, "0");
      let pbmins = Math.floor((pb / (1000 * 60)) % 60)
        .toString()
        .padStart(2, "0");
      let pbsecs = Math.floor((pb / 1000) % 60)
        .toString()
        .padStart(2, "0");
      let pbmils = Math.floor((pb % 1000) / 10)
        .toString()
        .padStart(2, "0");

      span.innerHTML +=
        "<br />PB: " + +pbhrs + ":" + pbmins + ":" + pbsecs + "." + pbmils;
    } else span.innerHTML += "<br />PB: Not set yet";
  },
};
