const setData=()=>{
    const data=[{name:"Abhi",age:20},{name:"vikas",age:22}];
    localStorage.setItem("student",JSON.stringify(data));
}
const getData=()=>{
    
    let data=JSON.parse(localStorage.getItem("student"));
    console.log(data);
}