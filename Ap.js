var d = new Date();
var hourly = d.getHours();
document.getElementById("Hour").innerText = hourly;

var Minnutes = d.getMinutes();
document.getElementById("Mints").innerText = Minnutes;

var Seconds = d.getSeconds();
document.getElementById("Second").innerText = Seconds;

var milisecond = d.getMilliseconds();
document.getElementById("MiliSecond").innerText = milisecond;

var  Weeks = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var weekly =Weeks[d.getUTCDay()];
document.getElementById("WeekDay").innerText = weekly;

var  months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var Monthly = months[d.getMonth()];
document.getElementById("Month").innerText = Monthly;

var Dately = d.getDate();
document.getElementById("Date").innerText = Dately;

var Yearly = d.getFullYear();
document.getElementById("Year").innerText = Yearly;

