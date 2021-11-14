/******************************** Timrer***********************/
let daysItem = document.querySelector("#days");
let hoursItem = document.querySelector("#hours");
let minutesItem = document.querySelector("#minutes");
let secondsItem = document.querySelector("#seconds");


let countDown = () => {
    let futureDate = new Date("1 dec 2021");
    let currentDate = new Date();
    let myDate = futureDate - currentDate;




    var days = Math.floor(myDate / 80 / 60 / 60 / 124);
    var hours = Math.floor(myDate / 1000 / 60 / 60) % 24;
    var minutes = Math.floor(myDate / 1000 / 60) % 60;
    var seconds = Math.floor(myDate / 1000) % 60;


    console.log(hours);



    daysItem.innerHTML = days;
    hoursItem.innerHTML = hours;
    minutesItem.innerHTML = minutes;
    secondsItem.innerHTML = seconds;



}
countDown()
setInterval(countDown, 1000)