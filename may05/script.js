//Math Object
let x=Math.PI;
x=Math.sign(6);
x=Math.sqrt(49);
x=Math.round(4.123);
x=Math.floor(4.567);
x=Math.ceil(4.1);
x=Math.trunc(2265.44544)
x=Math.min(45,34,0,-24,-2324,-433,-45);
x=Math.max(46,568,156,945,785);
x=Math.pow(2,5);
x=Math.trunc(Math.random()*10);

console.log(x);

let a=Math.trunc(Math.random()*100)+1;
let b=Math.trunc(Math.random()*50)+1;
let sum=a+b;
let pro=a*b;
let diff=a-b;
let q=a/b;
let rem=a%b;

console.log(`Sum: ${sum}`);
console.log(`Product: ${pro}`);
console.log(`Diff: ${diff}`);
console.log(`Qut: ${q}`);
console.log(`Rem: ${rem}`);

//Date Object
let d=new Date();
d=new Date(2025,4,5,13,24,56,854);
d=new Date(2025,4,5,13,24,56);
d=new Date(2025,4,5,13,24);
d=new Date(2025,4,5,13);
d=new Date(2025,4,5);
d=new Date(2025,4);
d=new Date(2025);//this will take as milliseconds and it get added in 01 jan 1970
console.log(d);