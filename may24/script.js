let h1=document.getElementById("demo");
h1.style.color="red";
h1.style.backgroundColor="yellow";
let para=document.getElementById("para");
// para.style.color="blue";
// para.style.backgroundColor="hotpink";
// para.style.border="10px solid black";
// para.style.borderRadius="1px";
// para.style.fontSize="20px";
// para.style.fontStyle="italic";
para.style.cssText="color:pink;background-color:blue;border:10px solid red;border-radius:40px;font-size:40px;font-style:italic;";
function change(){
    let loc=document.getElementById("myinput").value="delhi";
}
function change2(){
    let loc=document.getElementById("myinput").value;
    document.getElementById("hd").innerText=loc;
}
// the addEventListner() method attaches an event handler to the specified element
let btn=document.getElementById("btn");
btn.addEventListener("click",function(){
    console.log("button clicked");
})