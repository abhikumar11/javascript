// Q1
let person ={name:"Alice",age:25,city:"Delhi"};
console.log(person.name,person.age);
//q2
let user={username:"hellok",email:"hello@gmail.com"};
user.country="India";
console.log(user);
//q3
let account={id:1,status:"avtive"};
account.status="inactive";
console.log(account);
//q4
let profile={name:"hello",age:30};
console.log(Object.keys(profile).includes("email"));
//q5
let colors=["red","green"];
colors.push("blue");
console.log(colors);
//q6
let fruits=["apple","banana","orange"];
let m=fruits.pop();
console.log(m);
//q7
let task=["wake up","brush","eat"];
let n=task.shift(0);
console.log(n);
//q8
let steps=["step1","step2"];
steps.unshift("start");
console.log(steps);
//q9
let nums=[10,20,30,40,50];
let num=nums.slice(1,3);
console.log(num);
//q10
let letter=["a","b","c","d"];
letter.splice(1,2);
console.log(letter);
//q11
let arr=[1,2,3,4];
arr.splice(2,0,"x","y");
console.log(arr);
//q12
let a=[1,2];
let b=[3,4];
let c=[...a,...b];
console.log(c);
//q13
let seq=[1,2,3,4];
let rev=seq.reverse();
console.log(rev);
