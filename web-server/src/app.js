const express = require('express')
const path = require('path')
const hbs = require('hbs')

const app = express()

// Define paths for express config
const publicDir = path.join(__dirname, '../public')
const viewsDir = path.join(__dirname, '../templates/views')
const partialsDir = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsDir)
hbs.registerPartials(partialsDir)

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
        title: 'Help',
        name: 'Jeroen Beunckens',
        desc: 'This is a description'
    })
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Jeroen Beunckens',
        error: 'Help article not found'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Jeroen Beunckens',
        error: 'Page not found'
    })
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})