var a=10;
let y=a.toString();
console.log(y,typeof y);
var b="hello";
y=Number(b);
console.log(y,typeof y);
y=5+"5";
console.log(y);
y=886.45;
y=parseInt(y);
console.log(y);

// let name=prompt("what is your name");
// console.log(name);
// let age=parseInt(prompt("Enter your age"));
// console.log(age)

let l=parseInt(prompt("Enter length"));
let w=parseInt(prompt("Enter width"));
let area=l*w;
console.log(`The area of rectangle is ${area}`);