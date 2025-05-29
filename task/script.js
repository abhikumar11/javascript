// Name: Abhishek Kumar Verma,Course:MERN,Batch:P-53

//q1 How to Get the First Three Characters of a String?
function removeThree() {
  const str = "HelloWorld";
const temp = str.slice(0, 3);
console.log(temp);
}
removeThree();
//q2 Delete First Character of a String
function removeFirst(){
const str = "Hello";
const temp = str.slice(1);
console.log(temp);
}
removeFirst();
//q3 Sort an Array of Strings
function sortArray(){
const arr = ["banana", "apple", "cherry"];
arr.sort();
console.log(arr);
}
sortArray();
//q4 How to Remove All Line Breaks From a String?
function removeBreak(){
const str = "Hello\nWorld\r\n!";
let temp="";
for (let i=0;i<str.length;i++){
  let ch=str.charAt(i);
  if(ch!=="\n"||ch!=="\r"||ch!=="\t"){
    temp+=ch;
  }
}
console.log(temp);
}
removeBreak();
//q5 Extract a Number from a String using JavaScript
function extractNo() {
const str = "apple12banana34carrot56";
let num="";
for (let i=0;i<str.length;i++){
  let ch=str.charAt(i);
  if(ch>=0&&ch<=9){
    num+=ch;
  }
}
console.log(Number(num));
}
extractNo();
//q6 Convert string into date using JavaScript.
function convertDate() {
const dateStr = "2024-05-22";
const date = new Date(dateStr);
console.log(date);
}
convertDate();
//q7 Insert a String at a Specific Index.
function insertAt(str, index, value) {
  return str.slice(0, index) + value + str.slice(index);
}
console.log(insertAt("JavaScript is progamming language",13, " a"));

//q8 How to find the longest word within the string in JavaScript?
function longestWord(str) {
  let arr=str.split(" ");
  let temp=arr[0].length;
  let index=0;
  for(let i=1;i<arr.length;i++){
    if(arr[i].length>temp){
        index=i;
        temp=arr[i].length;
    }
  }
  return arr[index];
}
console.log(longestWord("Bhopal is a city in the central Indian state of Madhya Pradesh"));

// q9 Write a Javascript program to find the prime number in a given array?
function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function findPrimes(arr) {
  let temp=[];
  for(let i=0;i<arr.length;i++){
    if(isPrime(arr[i])){
      temp.push(arr[i]);
    }
  }
  return temp;
}
console.log(findPrimes([2, 3, 4, 5, 6, 7, 8, 9, 10]));

//q10 Write a Javascript program to find smallest value in an array?
function smallestValue() {
const arr = [58,12,44,89,5,69,25,38];
let smallest=arr[0];
  for(let i=1;i<arr.length;i++){
    smallest=Math.min(smallest,arr[i]);
  }
console.log(smallest);
}
smallestValue();
//q11 Write a Javascript program to find the sum of the values of an array?
function arraySum() {
const arr = [25,15,30,45,5];
let sum=0;
  for(let i=0;i<arr.length;i++){
    sum+=parseInt(arr[i]);
  }
console.log(sum);
}
arraySum();
//q12 Write a Javascript program to check the given string is palindrome or not?
function isPalindrome(str) {
 let temp=str.split("").reverse().join("");
 return temp===str;
}
console.log(isPalindrome("racecar"));

// q13 Write a Javascript program to find current age of any person by using
// his/her data of birth?
function calculateAge(d) {
  const birth = new Date(d);
  const today = new Date();
  let age = today.getFullYear() - birth.getFullYear();
  const m = today.getMonth() - birth.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
    age--;
  }
  return age;
}
console.log(calculateAge("2000-03-27"));

//q14 How to calculate the yesterday's date in JavaScript?
function calDate(){
const today = new Date();
const yesterday = new Date(today);
yesterday.setDate(today.getDate() - 1);
console.log(yesterday.toDateString());
}
calDate();
//q15 Write a Javascript program to find the given year is leap year or not?
function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}
console.log(isLeapYear(2025));
