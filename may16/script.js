//fuction is a set of code which is used to perform specific task it is also called sub program and is created for reuseability and for enhancing the performance of the program
// function declaration,function defination,function calling
function Demo() {
     console.log("Hello function");
}
Demo();
//WAP to take input from user and check no is odd or even using function


function oddEven() {
    let num=Number.parseInt(prompt("Enter number"));
    if(num%2!==0){
        console.log(`${num} is odd number`);
    }
    else{
        console.log(`${num} is even number`);
    }
}
// oddEven();
//WAP to take input from user and print reverse table of that no using function
function table() {
      let num=Number.parseInt(prompt("Enter number"));
      for (let i = 10; i>=1; i--){
            console.log(`${num} x ${i} = ${num*i}`);    
      }
}
function area() {
      let a=Number.parseInt(prompt("Enter number "));
      let b=Number.parseInt(prompt("Enter number "));
      for (let i = 10; i>=1; i--){
            console.log(`${num} x ${i} = ${num*i}`);    
      }
}
