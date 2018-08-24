const request = require('request');

let getWeather = (latLng, callback) => {
  let { lat, long } = latLng;
  request({
    url: `https://api.darksky.net/forecast/5990c60ad7727d5ce4b6daf30719ec23/${lat},${long}`,
    json: true
  }, (error, response, body) => {
    if (error) {
      callback('Unable to fetch weather')
    }
    if (!error && response.statusCode === 200) {
      let dewPoint = body.currently.dewPoint;
      let experienceOfMoisture = '';
      switch (true) {
        case (dewPoint <= 55):
          experienceOfMoisture = 'pleasant'
          break;
        case (dewPoint > 55 && dewPoint < 65):
          experienceOfMoisture = 'bit sticky'
          break;
        default:
          experienceOfMoisture = 'oppresive'
      }
      callback(undefined, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature,
        experienceOfMoisture
      })
    }
  })
}
module.exports.getWeather = getWeather;