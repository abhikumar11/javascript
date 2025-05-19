function oddEven() {
    let num=Number.parseInt(prompt("Enter number"));
    if(num%2!==0){
        console.log(`${num} is odd number`);
    }
    else{
        console.log(`${num} is even number`);
    }
}
oddEven();
let obj={name:"ashu",age:40,city:"bhopal"};
console.log(obj.name);
let obj2={name:"ashu",age:40,city:"bhopal",salary:40};
console.log(obj2);
function printArray() {
    let arr=[10,20,30,40,50,60,70,80,90,100];
    let sum=0;
    for (let i=0;i<arr.length; i++){
            sum+=arr[i];
    }
    return sum;
}
console.log(`Sum: ${printArray()}`);
let radius=parseFloat(prompt("Enter radius of circle: "));
function area(rad) {
    return Math.PI*rad*rad;
}
console.log(`Area of the circle with radius ${radius} is ${area(radius)}`);