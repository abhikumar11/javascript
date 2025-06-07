let num=1;
let intial;
const startTime=()=>{
    intial=setInterval(()=>{
    console.log(num++);
},1000);
}
const stopTime=()=>{
    clearInterval(intial)
}

