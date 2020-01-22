const request = require('request');

const forecast = (latitude, longitude, callback) =>{

    const url = 'https://api.darksky.net/forecast/69a3fc2d3c568cb8ffb1851122e337d7/'+ latitude + ',' + longitude;
    request({url, json:true }, (error, {body}) =>{
        if(error){
            callback('Unable to connect to weather services', undefined);
        }else if(body.error){

            callback('Unable to find location. Try another search.', undefined)
        }else{
            callback(undefined, 

                body.daily.data[0].summary + ' It is currently ' + body.currently.temperature  + ' degrees out. High today is: ' + body.daily.data[0].temperatureHigh + ' with a low of ' + body.daily.data[0].temperatureLow + '. There is a ' + body.currently.precipProbability +'% change of rain.');


        }

    });

};

module.exports = forecast;