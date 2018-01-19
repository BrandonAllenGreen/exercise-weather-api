'use strict';

const $ = require('jquery');
const weatherFactory = require('./weatherFactory');


function loadData() {
  weatherFactory.getWeather()
  .then( (data) => {
    console.log("data?", data);
    
    
  });
}

loadData();

// function loadZip() {
//   weatherFactory.getWeatherByZip()
//   .then( (data) => {
//     console.log("data>", data);
    
//   });
// }

// loadZip();

// Temperature
// Conditions
// Air pressure
// Wind speed
// An affordance to view the forecast for the current day, the next three days, or the next 7 days