//array and array methods
const numbers=[1,2,3,4,5,6];
console.log(numbers[0]);
let a=numbers[1];
console.log(a);

const colors=new Array();
colors[0]="red";
colors[1]="green";
colors[2]="blue";
console.log(colors);
const mixed=[10,20,"john",true,{age:23,city:"bhopal"}]
console.log(mixed[0]);
console.log(mixed[2]);
console.log(mixed[4].age);

let x=numbers.length;
x=numbers.indexOf(5);
x=numbers.includes(7);
console.log(x);
numbers.push(7);
console.log(numbers);
numbers.pop();
console.log(numbers);
numbers.unshift(10);//remove first element
console.log(numbers);

numbers.shift();//remove first element
console.log(numbers);

numbers.reverse();//reverse
console.log(numbers);

x=numbers.toString();
x=numbers.join();//converts the array into string
console.log(x);
//slice returs a new array with selected elements it does not change the original array
x=numbers.slice(0,4);
console.log(x);
//splice(starting index,number of elements to remove from starting index)
x=numbers.splice(1,2);
console.log(x);
console.log(numbers);

x=numbers.splice(1,3,100,200,300);
console.log(x);
console.log(numbers);

const arr=[10,20,30,40,50,60,70];
x=arr.slice(1,4).reverse().toString().charAt(0);
console.log(x);

const fruits=["apple","kiwi","orange"];
const veg=["potato","tomato","peas"];
let full=[fruits,veg];
x=full[1][0];
console.log(full);
console.log(x);
full=fruits.concat(veg);
console.log(full);