const person={
    name:"Jhon",
    age:34,
    city:"london"
};
console.log(person.name);
console.log(person.age);
console.log(person.city);

const arr=[1,2,3,4,5,6];

console.log(arr[0]);

function display() {
    console.log("hello display");
}
display()
x=10;
y="10";
if(x==y){
    console.log(true);
}
else{
    console.log(false);
}
let first="hello";
let last="world";
let full=first+" "+last;
console.log("how are you "+" "+first+last);
let data=`how are you ${first} and ${last}`;
console.log(data);