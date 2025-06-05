let a=[1,2,3],b=[4,5,6];
for(let x=0;x<b.length;x++){
    a.push(b[x]);
}
console.log(a);

a=[3,7,2,9,5];
let max=0;
for(let i=0;i<a.length;i++){
    if(max<a[i]){
        max=a[i];
    }
}
console.log(max);
a=[10,20,30,40,50];
let i=0,j=a.length-1;
while(i<j){
    let temp=a[i];
    a[i]=a[j];
    a[j]=temp;
    i++;
    j--;
}
console.log(a);
