let d=new Date();
d=new Date("2022-03-12 12:30:45");
d=new Date("12-03-2022");
d=new Date("2022/05/23");
d=new Date(96454856924);
console.log(d)
d=new Date();
const year=d.getFullYear();
console.log(year);
const month=d.getMonth();
console.log(month);
const day=d.getDay();
console.log(day);
const date=d.getDate();
console.log(date);
const hour=d.getHours();
console.log(hour);
const min=d.getMinutes();
console.log(min);
const sec=d.getSeconds();
console.log(sec);
const milli=d.getMilliseconds();
console.log(milli);

switch (day) {
    case 0:console.log("Sunday")
     break;
     case 1:console.log("Monday")
     break;
     case 2:console.log("Tuesday")
     break;
     case 3:console.log("Wednesday")
     break;
     case 4:console.log("Thursday")
     break;
     case 5:console.log("Friday")
     break;
     case 6:console.log("Saturday")
     break
    default:console.log("Wrong Input")
        break;
}