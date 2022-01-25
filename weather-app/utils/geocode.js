const request = require('postman-request')
const fs = require('fs')
const mapboxApiKey = fs.readFileSync('mapbox-api-key.txt').toString()


const geoCode = (address, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?limit=1&access_token=${mapboxApiKey}`
    // https://api.mapbox.com/geocoding/v5/mapbox.places/Hasselt%2C%20Belgium.json?limit=1&access_token=pk.eyJ1IjoiamVyb2VuYmV1bmNrZW5zIiwiYSI6ImNreW5mdGVwZTAzOHoyb24yb3Y0cGV0bHUifQ.eLFInY1CKubObCgl5YOaig
    request(url, {json: true}, (error, body, {features}) => {
        if (error) {
            callback(`Couldn't reach the Mapbox API`, undefined)
        } else if (features.length === 0) {
            callback(`Couldn't find the specified location`,undefined)
        } else {

            const {[1]:latitude,[0]:longtitude} = features[0].geometry.coordinates
            
            callback(undefined,{
                latitude,
                longtitude,
                location: address
            })
        }
    })
}

module.exports = geoCode