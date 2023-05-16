async function getLondonWeather(){
    url = 'https://api.openweathermap.org/data/2.5/weather?q=london&appid=a9416531306ab7444be40400827a9ef3'
    res = await fetch(url)
    resJ = await res.json()
    london = document.getElementById('london').innerText=Math.round(resJ.main.temp-273.15)
    weatherIcon = document.getElementById('londonIcon');
    weatherIcon.src = getImage(london);
    weatherIcon.style.display = "block"
}

async function getJerusalemWeather(){
    url = 'https://api.openweathermap.org/data/2.5/weather?q=jerusalem&appid=a9416531306ab7444be40400827a9ef3'
    res = await fetch(url)
    resJ = await res.json()
    jerusalem = document.getElementById('jerusalem').innerText=Math.round(resJ.main.temp-273.15)
    weatherIcon = document.getElementById('jerusalemIcon');
    weatherIcon.src = getImage(jerusalem);
    weatherIcon.style.display = "block"
}

async function getNewYorkWeather(){
    url = 'https://api.openweathermap.org/data/2.5/weather?q=london&appid=a9416531306ab7444be40400827a9ef3'
    res = await fetch(url)
    resJ = await res.json()
    newYork = document.getElementById('newYork').innerText=Math.round(resJ.main.temp-273.15)
    weatherIcon = document.getElementById('newYorkIcon');
    weatherIcon.src = getImage(newYork);
    weatherIcon.style.display = "block"
}

function getAllWeather(){
    getLondonWeather()
    getJerusalemWeather()
    getNewYorkWeather()
}

async function getByCity(city){
    console.log(city)
    url = 'https://api.openweathermap.org/data/2.5/weather?q='+ city +'&appid=a9416531306ab7444be40400827a9ef3'
    res = await fetch(url)
    resJ = await res.json()
    console.log(resJ)
    cityTitle = city[0].toUpperCase() + city.slice(1).toLowerCase()
    cityHeader = document.getElementById('byCityHeader').innerText=cityTitle
    cityTemp = document.getElementById('byCityTemp').innerText=Math.round(resJ.main.temp-273.15)
    weatherIcon = document.getElementById('byCityIcon');
    weatherIcon.src = getImage(cityTemp);
    document.getElementById('byCityIcon').style.display = "block"
}

function getImage(temp){
    if (temp <= 12){
        icon = 'grayclouds.png'
    } else if (temp > 12 && temp < 20) {
        icon = 'cloudsun.webp'
    } else {
        icon = 'sun.png'
    } 
    return icon
}

getAllWeather()
refreshInterval = setInterval(getAllWeather, 60000)

async function byCoordinates(lat,lon){
    url = 'https://api.openweathermap.org/data/2.5/weather?lat='+ lat+ '&lon='+ lon+ '&appid=a9416531306ab7444be40400827a9ef3'
    res = await fetch(url)
    resJ = await res.json()
    customTemp = document.getElementById('coordinatesTemp').innerText=Math.round(resJ.main.temp-273.15)
    weatherIcon = document.getElementById('coordinateIcon');
    weatherIcon.src = getImage(customTemp);
    document.getElementById('coordinateIcon').style.display = "block"
}