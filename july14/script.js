let counter=0;
const increase=()=>{
    let display=document.querySelector("#cnt");
    ++counter;
    display.innerHTML=counter;
}
const decrease=()=>{
    let display=document.querySelector("#cnt");
    counter==0?counter=0:--counter;
    display.innerHTML=counter;
}

