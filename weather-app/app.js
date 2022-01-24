const geoCode = require('./utils/geocode')
const forecast = require('./utils/forecast')


geoCode('Hasselt', (error, data) => {
    console.log(`Error`,error);
    console.log(`Data`, data);
})

forecast(5.3378043, 50.9303735, (error, data) => {
    console.log('Error', error);
    console.log('Data', data);
})