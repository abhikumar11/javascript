function display1() {
    console.log("hello");
}
function display2() {
    return (10+20);
}
let res=display2();
console.log(res);

function display3(val1,val2){
    console.log(val1+val2);
}
display3(60,50);


function display4(val1,val2){
    return(val1*val2);
}
res=display4(10,2);
console.log(res);
function intro() {
     let name=(prompt("Enter name"));
     console.log(`hello ${name}`);
}
function demo(){
    return "this is a demo function";
}
console.log(demo());
function cube(val){
    return Math.pow(val,3);
}
console.log(cube(2));

function user(person) {
    console.log(`person name is ${person.name} and age is ${person.age}`);
}
user({name:"john",age:34});
let myfunction=function(){
    console.log("this is myfunction");
}
myfunction();
let substraction=function(val1,val2){
    console.log(val1-val2);
}
substraction(10,5);
let myfunction2=()=>{
    console.log("this is an arrow function");
}
myfunction2();