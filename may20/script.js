(function (){
    var x="hello";
    console.log(x);
})();
(function (){
    var name="Abhishek";
    var age=25;
    var course="MERN";
    console.log(`Name:${name} age:${age} course:${course}`);
})()
//when a webpage is loaded in the browser it converts the html document into DOM (Document Object Model) it is a tree of elements in which all the elements are treated as objects 
//html dom methods are actions you can perform on html elements
//html dom properties are values that can be set by js

//let h1=document.getElementById("demo");
//h1=document.getElementsByTagName("h1");
//let h1=document.getElementsByClassName("head");
//console.log(h1[0]);

//let h1=document.querySelector(".head"); 
// h1=document.querySelector("#demo"); 
// console.log(h1);
let h1=document.getElementById("demo");
h1.innerText="hello world";
// let name=prompt("Enter name");
// document.getElementById("demo2").innerText=name;
document.getElementById("demo2").innerHTML=`
<table border>
<tr>
<th>Name</th>
<th>Age</th>
</tr>
<tr>
<td>John</td>
<td>24</td>
</tr>
<tr>
<td>Harry</td>
<td>36</td>
</tr>
</table>
`;
document.getElementById("myimg").src="pic2.jpg";