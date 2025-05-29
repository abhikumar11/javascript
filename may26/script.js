
function add(){
    let a=parseInt(document.getElementById("input1").value);
let b=parseInt(document.getElementById("input2").value);
let ans=document.getElementById("ans");
let c=a+b;
console.log(c);
ans.innerText=`Ans: ${c}`;
}
function sub(){
    let a=parseInt(document.getElementById("input1").value);
let b=parseInt(document.getElementById("input2").value);
let ans=document.getElementById("ans");
let c=a-b;
console.log(c);
ans.innerText=`Ans: ${c}`;
}
function mul(){
    let a=parseInt(document.getElementById("input1").value);
let b=parseInt(document.getElementById("input2").value);
let ans=document.getElementById("ans");
let c=a*b;
console.log(c);
ans.innerText=`Ans: ${c}`;
}
function divi(){
    let a=parseInt(document.getElementById("input1").value);
let b=parseInt(document.getElementById("input2").value);
let ans=document.getElementById("ans");
let c=a/b;
console.log(c);
ans.innerText=`Ans: ${c}`;
}
//q2 
function replaceWord() {
    let str="welcome to the google,Bhopal, we are student we learning js in google"
    let temp=str.replaceAll("google","cybrom");
    console.log(temp);
}
replaceWord();
function green(){
   let temp= document.getElementById("body");
   temp.style.backgroundColor="green";
}
function black(){
   let temp= document.getElementById("body");
   temp.style.backgroundColor="black";
}
function orange(){
   let temp= document.getElementById("body");
   temp.style.backgroundColor="orange";
}
function multiplication(){
    let arr=[1,2,3,4,5,6,7,8,9,10];
    let [a,b,c,d,e,f,g]=arr;
    let ans=a*b*c*d*e*f*g;
    console.log(ans);
}
multiplication();