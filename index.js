let date = moment().format("dddd, MMMM Do YYYY");
let dateElement = document.querySelector("#current-date");
dateElement.innerHTML = `Today is ${date}`;

let futureDate = moment().add(10, "years").format("dddd Do, MMMM, YYYY hh:mm:ss a");
let futureDateElement = document.querySelector("#future-date");
futureDateElement.innerHTML = `10
      years from now, it will be ${futureDate}`;
