function myDigitalClock() {
  var d1 = new Date();
  var hours = d1.getHours();    // 0 - 23
  var minutes = d1.getMinutes();  // 0 - 59
  var seconds = d1.getSeconds();  // 0 - 59
  var zone = "AM";

  
  if (hours > 12) {
    hours -= 12;
    zone = "PM";
  }

 
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  var digitalClock = hours + ":" + minutes + ":" + seconds + " " + zone;
  console.log(digitalClock);

  // Update every 1 second
  setTimeout(myDigitalClock, 1000);
}

myDigitalClock();
