// for(let i=1;i<=100;i++){
//     if(i%2===0){
//     console.log(i);
//     }
    
// }
let i=1;
// while (i<=100) {
//     console.log(i);
//     i++;
// }
do{
     console.log(i);
    i++;
}while(i<=10)

//for in loop
// for in loops through the properties of an object
const person={name:"Jhon",age:34,city:"bhopal"};
for (let x in person) {
console.log(person[x]);
}
// for in loop 'x' denotes the index of an array
let arr=[10,20,30,40,50,60];
for(let x in arr){
    console.log(arr[x]);
}
// for of loop
let arr2=[60,50,40,30,20,10];
for(let x of arr2){
    console.log(x);
}
let str="javascript";
for(let x of str){
    console.log(x);
}
//for-each
//the forEach() method calls a function (a callback function) once for each array element
arr=[45,58,98,63,78];
let ans="";
arr.forEach(myfunction);
function myfunction(x){
    ans+=x+" ";
}
console.log(ans);
arr=[10,20,30,40,50];
arr.forEach(sqfun);
function sqfun(x){
    console.log(x*x);
}
arr=["apple","mango","banana","kiwi"];
arr.forEach(prname);
function prname(x){
    console.log(x);
}
//map() method is used for creating a new array from an exisiting one, applying a function to each one of the elements of the array 
const num=[1,2,3,4,5];
const temp=num.map(myfunction2);
function myfunction2(x) {
    return x*x;
}
console.log(temp);