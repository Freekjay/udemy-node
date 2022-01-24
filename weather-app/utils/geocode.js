const request = require('request')
const fs = require('fs')
const mapboxApiKey = fs.readFileSync('mapbox-api-key.txt').toString()


const geoCode = (address, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?limit=1&access_token=${mapboxApiKey}`

    request(url, {json: true}, (error, response, body) => {
        if (error) {
            callback(`Couldn't reach the Mapbox API`, undefined)
        } else if (body.features.length === 0) {
            callback(`Couldn't find the specified location`,undefined)
        } else {
            const coordinates = body.features[0].geometry.coordinates
            
            callback(undefined,{
                latitude: coordinates[0],
                longtitude: coordinates[1],
                location: address
            })
        }
    })
}

module.exports = geoCode