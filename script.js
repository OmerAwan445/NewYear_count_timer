'use strict';
const newYear='1 jan 2024';
const daysEl =document.querySelector('.days')
const hoursEl=document.querySelector('.hours')
const minutesEl=document.querySelector('.minutes')
const secondsEl=document.querySelector('.seconds')
function countDown(){
    const newYearDate=new Date(newYear);
    const currentDate=new Date();
    const totalSeconds=(newYearDate-currentDate)/1000;
    const diffDays=Math.floor((totalSeconds/3600)/24);
    const diffHours=Math.floor(totalSeconds/3600)%24;
    const diffMin=(Math.floor(totalSeconds/3600*60)%60); 
    const diffSeconds=Math.floor(totalSeconds%60); 
    daysEl.innerHTML=diffDays;
    hoursEl.innerHTML=formatElement(diffHours);
    minutesEl.innerHTML=formatElement(diffMin);
    secondsEl.innerHTML=formatElement(diffSeconds);

    }
function formatElement(time){
return time<10 ? `0${time}`:`${time}`;
}
setInterval(countDown, 1000);