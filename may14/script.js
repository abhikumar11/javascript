const obj1={
    a:1,
    b:2,
};
const obj2={
    c:3,
    d:4,
};
const obj3={...obj1,...obj2};
console.log(obj3);

const students=[
    {id:1,name:"ram",course:"frontend"},
    {id:2,name:"rohit",course:"backend"},
    {id:3,name:"rishabh",course:"fullstack"},
    {id:4,name:"gaurav",course:"python"},
];
console.log(students[0].course);
console.log(students[1].id+" "+students[1].name+" "+students[1].course);
console.log(`${students[2].id} ${students[2].name} ${students[3].course}`)

const car={
    color:"black",
    model:2025,
    brand:"ford",
};
const {color,model,brand}=car;
console.log(color,model,brand);
const {color:a,model:b,brand:c}=car;
console.log(a,b,c);
const user={
    id:1,
    name:"john",
    age:32,
    city:"bhopal"
};
console.log(user);
const data=JSON.stringify(user);
console.log(data);

const updatedData=JSON.parse(data);
console.log(updatedData);

let library=[
    {title:"book1",author:"author1",status:{own:true,reading:false,read:false}},
    {title:"book2",author:"author2",status:{own:true,reading:false,read:false}},
    {title:"book3",author:"author3",status:{own:true,reading:false,read:false}},
]
library[0].status.read=true;
library[1].status.read=true;
library[2].status.read=true;

const [book]=library;
console.log(book);

const {title:firstBook}=book;
console.log(firstBook);

const lib=JSON.stringify(library);
console.log(lib);