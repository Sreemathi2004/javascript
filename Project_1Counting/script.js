
var d=document.getElementById("days");
var h=document.getElementById("hours");
var m=document.getElementById("minutes");
var s=document.getElementById("seconds");
function Up(){

var today = new Date();


var tomorrow = new Date();
tomorrow.setDate(today.getDate() + 1);
tomorrow.setHours(0, 0, 0, 0);


var difference = tomorrow - today;

var day = Math.ceil(difference / (1000 * 60 * 60 * 24));
var second = Math.floor(difference / 1000) % 60;
var minute = Math.floor(difference / (1000 * 60)) % 60;
var hour = Math.floor(difference / (1000 * 60 * 60));

d.innerHTML=day<10?"0"+day:day;
h.innerHTML=hour<10?"0"+hour:hour;
m.innerHTML=minute<10?"0"+minute:minute;
s.innerHTML=second<10?"0"+second:second;





}

setInterval(Up,1000);