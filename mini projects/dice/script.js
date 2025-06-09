function roll(){
    let out=document.querySelector("#display");
    let res=Math.trunc(Math.random()*6)+1;
    out.innerHTML=res;
    document.querySelectorAll(".dice").forEach(dice => {
    dice.style.display = "none";
  });
    let dis=document.querySelector(`.face${res}`);
     dis.style.display = "flex";
}