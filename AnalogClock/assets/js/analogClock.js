// this is the interval in which the minute and the second rotates
const deg = 6;
let hourCount = document.querySelector(".hr");
let minuteCount = document.querySelector(".min");
let secondCount = document.querySelector(".sec");

setInterval(() => {
    let day = new Date();
    let currentDay = day.getHours() * 30;
    let currentMinute = day.getMinutes() * deg;
    let currentSecond = day.getSeconds() * deg;
    hourCount.style.transform = `rotateZ(${(currentDay)+(currentMinute/12)}deg)`;
    minuteCount.style.transform = `rotateZ(${currentMinute}deg)`;
    secondCount.style.transform = `rotateZ(${currentSecond}deg)`;
})


// UI Variables 
const timerDemo = document.querySelector('.times')
//timer 
function startTime() {
    //retrieve date 
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    //get the AM / PM value 
    let am_pm = h > 12 ? 'PM' : 'AM';
    // Convert the hour to 12 format 
    h = h % 12 || 12;
    // add zero 
    m = addZero(m);
    s = addZero(s);
    // Assign to the UI [p]
    timerDemo.innerHTML = `${h} : ${m} : ${s} ${am_pm }`;
    setTimeout(startTime, 500);
}

function addZero(i) {
    if (i < 10) { i = "0" + i } // add zero in front of numbers < 10
    return i;
}
startTime()