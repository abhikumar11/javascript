// //Q1
// let arr=new Array(10);
// for (let i=0 ;i < arr.length;i++) {
//    arr[i]=prompt(`Enter data: ${i+1}`); 
// }
// console.log(arr);
// //Q2
// arr=[1,2,3,4,5,6,7,8,9,10];
// let sum=0;
// for (let i = 0; i < arr.length; i++){
//     sum+=parseInt(arr[i]);
// }
// console.log(`Sum: ${sum}`);
// //Q3
// let city="";
// city=prompt("Enter city: ");
// console.log(`Entered city: ${city}`);
// let rev=city.split("");
// rev.reverse();
// city=rev.join();
// console.log(`reversed string: ${city}`);
//Q4
console.log(Math.trunc(Math.random()*15)+1);
let date=new Date();
document.getElementById("time").innerHTML="Time: "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
document.getElementById("date").innerHTML="Date: "+date.getDate();