const express = require('express')
const path = require('path')

const app = express()

// Define paths for express config
const publicDir = path.join(__dirname, '../public')
const viewsDir = path.join(__dirname, '../templates')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsDir)

// Setup static directory to serve
app.use(express.static(publicDir))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Jeroen Beunckens'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Jeroen Beunckens'
    })
})

app.get('/weather', (req, res) => {
    res.send({
        location: 'Hasselt',
        forecast: '5 degrees'
    })
})

app.get('/help', (req, res) => {
    res.render('help',{
        desc: 'This is a description'
    })
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})