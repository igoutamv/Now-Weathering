let button = document.querySelector('.button')
let inputvalue = document.querySelector('.inputValue')
let nameVal = document.querySelector('.name');
let temp = document.querySelector('.temp');
let desc = document.querySelector('.desc');
let geo = document.querySelector('.geo');
let humidity = document.querySelector('.humidity');
let wind = document.querySelector('.wind');

function showPopup() {
    document.getElementById('popup').style.display = 'block';
}
  function closePopup() {
    document.getElementById('popup').style.display = 'none';
}
 
  function cityNotFound() {
    showPopup();
}

button.addEventListener('click', function(){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputvalue.value}&units=metric&appid=e40a63bbb9a9f772125f071f47220635`)
    .then(response => response.json())
    .then(displayData)
    .catch(error => {
        console.error('Error', error);
        cityNotFound();
    })
})

const displayData=(weather)=>{
    temp.innerText=`Temperature→ ${weather.main.temp}°C`
    desc.innerText=`Status→ ${weather.weather[0].main}`
    wind.innerText=`Wind→ ${weather.wind.speed} Km/h`
    humidity.innerText=`humidity→ ${weather.main.humidity} %`
    geo.innerText=`Coordinates→ ${weather.coord.lon.toFixed(2)} , ${weather.coord.lat.toFixed(2)}`
    console.log(weather);
}

//Thanks - Igoutamv