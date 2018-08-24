const yargs = require('yargs');
const geocode = require('./geocode/geocode');
const weather = require('./weather/weather')
const argv = yargs
  .options({
    a: {
      demand: true,
      describe: 'Address to get weather for',
      alias: 'address',
      string: true
    },
  })
  .help()
  .alias('help', 'h')
  .argv;


let address = argv.a
// let latLong = geocode.geocodeAddress(address)

// geocode.geocodeAddress(address, ((errorMessage, results) => {
//   if (errorMessage) {
//     console.log(errorMesage)
//   } else {
//     //console.log(JSON.stringify(results, undefined, 2))
//     weather.getWeather(results, ((errorMessage, weatherResults) => console.log(`The temperature is ${weatherResults.temperature} but it feels like ${weatherResults.apparentTemperature}. It is ${weatherResults.experienceOfMoisture} outside.`
//     )))
//   }
// }))

geocode.geocodeAddress(address, (errorMessage, results) => {
  if (errorMessage) {
    console.log(errorMessage);
  } else {
    weather.getWeather(results, (errorMessage, weatherResults) => {
      if (errorMessage) {
        console.log(errorMessage);
      } else {
        console.log(`It's currently ${weatherResults.temperature}. It feels like ${weatherResults.apparentTemperature}.`);
      }
    });
  }
});
