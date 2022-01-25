const geoCode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const inputLocation = process.argv[2]

if (!inputLocation) {
    console.log('Provide a location as parameter');
} else {
    geoCode('Hasselt, Belgium', (error, {location, latitude, longtitude} = {}) => {
        if (error) {
            return console.log(error);
        }
    
        forecast(latitude, longtitude, (error, forecastData) => {
            if (error) {
                return console.log(error);
            }
    
            console.log(location);
            console.log(forecastData);
        })
    })
}