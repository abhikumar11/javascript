const numbers=[123,23,432];
const value=numbers.reduce(myfunction);

function myfunction(total,num){
    return total+num;
}
let sum=0;

for(let x of numbers){
    sum+=x;
}
console.log(sum);
let arr=["apple","banana","mango","kiwi","cheery"];
console.log(arr[2]);
arr=[1,2,3,4];
arr.push(5);
console.log(arr);
arr.shift(0);
console.log(arr);
console.log(arr.includes(2));

for(let x of arr){
    console.log(x);
}
let person={name:"abhishek",age:25};
console.log(person.name);
person["city"]="bhopal";
console.log(person);
