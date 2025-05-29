const fruits=["apple","cherry","kiwi","grapes"];
let text="<ul>";

fruits.map(function(x){
    text+=`<li>${x}</li>`;
});
text+="</ul>"
document.getElementById("demo").innerHTML=text;
const person=[
    {
        name:"john",
        age:23,
    },
    {
        name:"harry",
        age:23,
    },
    {
        name:"odin",
        age:45,
    }
];
let table=`<table border=1px>
<tr>
<th>Name</th>
<th>Age</th>
</tr>
`;
person.map((item)=>{
    table+=`
    <tr>
    <td>${item.name}</td>
     <td>${item.age}</td>
    </tr>
    `
});
table+="</table>";
document.getElementById("demo2").innerHTML=table;

const num=[10,20,30,45,50,60,75,80];
const temp=num.filter((x)=>x>30);
console.log(temp);

const students=[
    {name:"mahesh",grade:96},
    {name:"suresh",grade:84},
    {name:"jayesh",grade:100},
    {name:"jitesh",grade:65},
    {name:"sukesh",grade:90},
]
const stu=students.filter((s)=>s.grade>90);
console.log(stu);

