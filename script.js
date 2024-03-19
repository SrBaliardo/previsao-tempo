const keyApi = 'd7a994a009e010705536fa68bdf4b031';

function showInfo(data) {
    console.log(data);
    document.querySelector('.weather-city').innerHTML = 'Tempo em ' + data.name;
    document.querySelector('.temperature').innerHTML = Math.floor(data.main.temp) + 'º C';
    document.querySelector('.sky').innerHTML = data.weather[0].description;
    document.querySelector('.humidity').innerHTML = 'Umidade: ' + data.main.humidity + '%';
    document.querySelector('.img-weather').src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;

}

async function citySearch(city) {
    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${keyApi}&lang=pt_br&units=metric`).then(response => response.json());
    showInfo(data);
}

function clickSearch() {
    const city = document.querySelector('.input-city').value;
    citySearch(city);
}

document.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        clickSearch();
    }
});