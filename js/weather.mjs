import { updateGUI, logout } from "./utils.mjs";
import { getWeatherData, revealAll, degreeToCompass, secondsSinceEpochToTime } from "./weatherAPI.mjs";

let url= 'https://api.openweathermap.org/data/2.5/weather?zip=&appid=bfbf4f27dd5879cb9ed45a2afb2f7b8b&units=imperial';
const REFRESH_SECONDS = 30;
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
    modifyPage(data);
    await refreshManager();
});

function modifyPage(data)
{
    revealAll();
    document.title = `Weather in ${data.name}`;
    document.getElementById('header').innerText = `Weather in ${data.name}`;

    document.getElementById('temperature').textContent = `Temperature: ${data.main.temp}°F`;
    document.getElementById('feels-like').textContent = `Feels Like: ${data.main.feels_like}°F`;
    document.getElementById('low-temp').textContent = `Low Temperature: ${data.main.temp_min}°F`;
    document.getElementById('high-temp').textContent = `High Temperature: ${data.main.temp_max}°F`;
    document.getElementById('humidity').textContent = `Humidity: ${data.main.humidity}%`;
    document.getElementById('wind').textContent = `Wind Speed: ${data.wind.speed} mph ${degreeToCompass(data.wind.deg)}`;
    document.getElementById('sunrise').textContent = `Sunrise: ${secondsSinceEpochToTime(data.sys.sunrise)}`;
    document.getElementById('sunset').textContent = `Sunset: ${secondsSinceEpochToTime(data.sys.sunset)}`;
}

async function refreshManager()
{
    const refreshTimer = document.getElementById('refresh-timer');

    if(--secondsUntilRefresh <= 0)
    {
        setTimeout(() =>
        {
            refreshTimer.textContent = 'Refreshing...';

        }, 0);

        const data = await getWeatherData();
        modifyPage(data);
        secondsUntilRefresh = REFRESH_SECONDS;
    }

    refreshTimer.textContent = `Refreshing in ${secondsUntilRefresh} second${secondsUntilRefresh === 1 ? '' : 's'}...`;

    setTimeout(refreshManager, 1000);
}