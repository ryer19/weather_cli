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
let location = geocode.geocodeAddress(address)

location.then(results => weather.getWeather(results))
  .then(res => {
    let currentConditions = res.currently
    let { temperature: temp, apparentTemperature: appTemp } = currentConditions;
    console.log(`It's currently ${temp}. It feels like ${appTemp}.`)
  })
