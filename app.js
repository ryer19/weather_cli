
const yargs = require('yargs');
const geocode = require('./geocode/geocode');

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
<<<<<<< HEAD
<<<<<<< HEAD
let latLong = geocode.geocodeAddress(address)
=======
=======
>>>>>>> d52d44b... switched from callback to promises for geocode api function
geocode.geocodeAddress(address, ((errorMessage, results) => {
  if (errorMessage) {
    console.log(errorMesage)
  } else {
    //console.log(JSON.stringify(results, undefined, 2))
    weather.getWeather(results, ((errorMessage, weatherResults) => console.log(`The temperature is ${weatherResults.temperature} but it feels like ${weatherResults.apparentTemperature}. It is ${weatherResults.experienceOfMoisture} outside.`
    )))
  }
}))
>>>>>>> d52d44b... switched from callback to promises for geocode api function
