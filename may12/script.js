const num1=[10,20,30];
const num2=[40,50,60];
const num3=[...num1,...num2];
console.log(num3);

const x=Array.isArray(num1);
console.log(x);

const y=Array.from('12345');
console.log(y);

//destructuring 
const arr=[1,2,3,4,5,6,7,8,9];
const [a,b,c,d,...rest]=arr;
console.log(a,b,c,d);
console.log(rest);

let arr2=[1,2,3,4,5];
arr2.push(6);
arr2.unshift(0);
arr2=arr2.reverse();
console.log(arr2);

arr2=[1,2,3,4,5];
let arr3=[5,6,7,8,9,10];
arr3.shift();
let res=[...arr2,...arr3];
console.log(res);

//object literal
const person={
    name:"Jhon",
    age:45,
    isEligible:true,
    address:{
        state:"mp",
        country:"India"
    },
    hobbies:["dance","singing"],
    greet:function() {
        console.log("hello");
    }
}
console.log(person.name);
console.log(person['name']);
console.log(person.isEligible);
console.log(person.address.country);
console.log(person.hobbies[1]);
person.greet();