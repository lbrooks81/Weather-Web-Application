import { updateGUI, logout } from "./utils.mjs";
import { getWeatherData, revealAll, degreeToCompass, secondsSinceEpochToTime } from "./weatherAPI.mjs";

let url = 'https://api.openweathermap.org/data/2.5/forecast?zip=&appid=bfbf4f27dd5879cb9ed45a2afb2f7b8b&units=imperial'
const REFRESH_SECONDS = 6;
let secondsUntilRefresh = REFRESH_SECONDS + 1;

document.addEventListener('DOMContentLoaded', async () =>
{

    document.getElementById('logout-btn')
        .addEventListener('click', () =>
        {
            logout();
        });

    updateGUI();
    const data = await getWeatherData(url);
    console.log(data);
    modifyPage(data);
});

function modifyPage(data)
{

    createCards();
    revealAll();
    document.title = `Forecast for ${data.city.name}`;
    document.getElementById('header').textContent = `Forecast for ${data.city.name}`;

    for (let i = 0; i < 5; i++)
    {
        document.getElementById(`temperature-${i}`).textContent = `Temp: ${data.list[i].main.temp}°F`;
        document.getElementById(`low-temp-${i}`).textContent = `Low: ${data.list[i].main.temp_min}°F`;
        document.getElementById(`high-temp-${i}`).innerHTML = `High: ${data.list[i].main.temp_max}°F <i class="bi bi-thermometer-half"></i>`;
        document.getElementById(`humidity-${i}`).textContent = `Humidity: ${data.list[i].main.humidity}%`;
        document.getElementById(`wind-${i}`).textContent = `Wind Speed: ${data.list[i].wind.speed} mph ${degreeToCompass(data.list[i].wind.deg)}`;
    }
}

function createCards()
{
    const cardRow = document.getElementById('card-row');

    for (let i = 0; i < 5; i++)
    {
        const cardDiv = document.createElement('td');
        cardDiv.className = "px-1";

        // TODO display the day of the week above each card
        const cardElement = document.createElement('div');
        cardElement.className = 'card';
        cardElement.innerHTML = `
        <div class="border border-primary rounded card-body placeholder-glow" id="card-body">
            <div id="temperature-${i}">
                Temp:
                <span class="placeholder col-3 "></span>
            </div>
            <div id="low-temp-${i}">
                Low:
                <span class="placeholder col-3"></span>
            </div>
            <div id="high-temp-${i}">
                High:
                <span class="placeholder col-3"></span>
            </div>
            <div id="humidity-${i}">
                Humidity:
                <span class="placeholder col-4"></span>
            </div>
            <div id="wind-${i}">
                Wind Speed:
                <span class="placeholder col-4"></span>
            </div>
        </div>`;

        cardDiv.appendChild(cardElement);
        cardRow.appendChild(cardDiv);
    }
}