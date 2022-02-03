console.log('Clientside javascript file is loaded')

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const locationOutput = document.querySelector('#location')
const forecastOutput = document.querySelector('#forecast')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value

    locationOutput.textContent = 'Loading ...'
    forecastOutput.textContent = ''

    fetch(`http://localhost:3000/weather?address=${location}`).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                locationOutput.textContent = 'ERROR'
                forecastOutput.textContent = data.error
            } else {
                locationOutput.textContent = data.location
                forecastOutput.textContent = data.forecast
            }
        })
    })
})