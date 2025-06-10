let timer,totalsec = 0,counter=0;

let hd = document.querySelector("#hours");
let md = document.querySelector("#minutes");
let sd = document.querySelector("#seconds");

let hh = document.querySelector("#inputHours");
let mm = document.querySelector("#inputMinutes");
let ss = document.querySelector("#inputSeconds");
const startTimer = () => {


     let h = parseInt(hh.value) || 0;
     let m = parseInt(mm.value) || 0;
     let s = parseInt(ss.value) || 0;
     totalsec = h * 3600 + m * 60 + s;
     
     timer = setInterval(() => {
          if (totalsec <= 0) {
               clearInterval(timer);
               return;
          }
          --totalsec;
          h = Math.floor(totalsec / 3600);
          m = Math.floor((totalsec % 3600) / 60);
          s = totalsec % 60;
          hd.innerHTML = h;
          md.innerHTML = m;
          sd.innerHTML = s;
     }, 1000);
};

const stopTimer = () => {
       clearInterval(timer); 
};
const resetTimer=()=>{
 
}
