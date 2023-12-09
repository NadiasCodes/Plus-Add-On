//cha2
let hawaiiTime = moment()
  .tz("Pacific/Honolulu")
  .format("dddd, MMMM D, YYYY h:m A");
let currentTimeElement = document.querySelector("#current-date");
currentTimeElement.innerHTML = `It is ${hawaiiTime}, in Honolulu Hawaii`;
//cha 3
let futureParisTime = moment()
  .tz("Europe/Paris")
  .add(10, "years")
  .format("dddd, MMMM D, YYYY h:m A");
let futureDate = document.querySelector("#future-date");
futureDate.innerHTML = `10 years from now, it will be ${futureParisTime}, in Paris, France`;

//cha 4

let localTimezone = moment.tz.guess();
let localElement = document.querySelector("#local-time-zone");
localElement.innerHTML = `Your current time zone is ${localTimezone} and the current time is ${moment().format(
  "h:m A"
)}`;
