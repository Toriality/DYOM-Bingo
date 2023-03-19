




export const timer = {
    startTime: null,
    tickReference: null,
    createIn: (div) => {
        timer.startTime = Date.now(); 
        let span = document.createElement("span");
        span.id="timerString";     
        div.appendChild(span);
        timer.tick();
        timer.tickReference = setInterval(timer.tick, 10);
    },
    getPB: () => {
        if (!localStorage.getItem("PB")) 
            return null;
        else 
            return localStorage.getItem("PB");
    },
    setPB: (time) => {
       localStorage.setItem("PB", time); 

    },


    tick: () =>{
        let span = document.getElementById("timerString");
        let time = (Date.now()-timer.startTime);
        let hrs = Math.floor((time/(1000*60*60))%24).toString().padStart(2, "0");
        let mins = Math.floor((time/(1000*60))%60).toString().padStart(2, "0");
        let secs = Math.floor((time/1000)%60).toString().padStart(2, "0");
        let mils = Math.floor((time%1000)/10).toString().padStart(2, "0");
        
        span.innerHTML = "Time: "+hrs+":"+mins+":"+secs+"."+mils;
        if(timer.getPB()!=null){
            let pb = timer.getPB();
            let pbhrs = Math.floor((pb/(1000*60*60))%24).toString().padStart(2, "0");
            let pbmins = Math.floor((pb/(1000*60))%60).toString().padStart(2, "0");
            let pbsecs = Math.floor((pb/1000)%60).toString().padStart(2, "0");
            let pbmils = Math.floor((pb%1000)/10).toString().padStart(2, "0");
        
            span.innerHTML += "<br />PB: " + +pbhrs+":"+pbmins+":"+pbsecs+"."+pbmils;
        }
        else
            span.innerHTML += "<br />PB: not set yet";
    },
    restart: () => {
        timer.startTime = Date.now();
        if(timer.tickReference == null)
            timer.tickReference = setInterval(timer.tick, 10);
            

    },
    win: () => {
        let time = (Date.now()-timer.startTime);
        clearInterval(timer.tickReference);
        timer.tickReference = null;
        if(timer.getPB()==null || timer.getPB()>time)
            timer.setPB(time);

        let span = document.getElementById("timerString");
    
    

        let hrs = Math.floor((time/(1000*60*60))%24).toString().padStart(2, "0");
        let mins = Math.floor((time/(1000*60))%60).toString().padStart(2, "0");
        let secs = Math.floor((time/1000)%60).toString().padStart(2, "0");
        let mils = Math.floor((time%1000)/10).toString().padStart(2, "0");
        
        span.innerHTML = "Time: "+hrs+":"+mins+":"+secs+"."+mils;
        if(timer.getPB()!=null){
            let pb = timer.getPB();
            let pbhrs = Math.floor((pb/(1000*60*60))%24).toString().padStart(2, "0");
            let pbmins = Math.floor((pb/(1000*60))%60).toString().padStart(2, "0");
            let pbsecs = Math.floor((pb/1000)%60).toString().padStart(2, "0");
            let pbmils = Math.floor((pb%1000)/10).toString().padStart(2, "0");
        
            span.innerHTML += "<br />PB: " + +pbhrs+":"+pbmins+":"+pbsecs+"."+pbmils;;
        }
        else
            span.innerHTML += "<br />PB: not set yet";


    }



}