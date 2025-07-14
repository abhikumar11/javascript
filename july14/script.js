let counter=0;
const increase=()=>{
    let display=document.querySelector("#cnt");
     ++counter;
    counter%2!==0?display.style.color="red":display.style.color="black";
    display.innerHTML=counter;
}
const decrease=()=>{
    let display=document.querySelector("#cnt");
    counter==0?counter=0:--counter;
    counter%2!=0?display.style.color="red":display.style.color="black";
    display.innerHTML=counter;
}

