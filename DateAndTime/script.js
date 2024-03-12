const currentDate=new Date();
console.log(currentDate);


const date1=new Date();
const year=date1.getFullYear();
const month=date1.getMonth();
const day=date1.getDay();
const hours=date1.getHours();
const minutes=date1.getMinutes();

console.log(`Year : ${year}`);
console.log(`Month : ${month}`);
console.log(`Day : ${day}`);
console.log(`Hours : ${hours}`);
console.log(`Minutes : ${minutes}`);



date1.setDate(date1.getDay()+1);
console.log(date1);