import {getCookieValue} from "./utils.mjs";

export { getWeatherData, secondsSinceEpochToTime, revealAll, degreeToCompass };

async function getWeatherData(url)
{
    try
    {
        url = url.replace("zip=", `zip=${localStorage.getItem(`${getCookieValue('email')}-zip-code`)}`)

        const results = await fetch(url);

        if(results.ok === false)
        {
            throw new Error(results.statusText);
        }

        const data = await results.json();

        console.log(data);
        return data;
    }
    catch(err)
    {
        console.error(err);
        throw new Error(err.message);
    }
}

function revealAll()
{
    const placeholders = document.querySelectorAll('.placeholder');
    for(let ph of placeholders)
    {
        ph.style.display = 'none';
    }
}
function degreeToCompass(degree)
{
    // Normalize the degree to ensure it is within 0-360
    degree = degree % 360;

    if (degree < 0) {
        degree += 360;
    }

    if (degree >= 337.5 || degree < 22.5)
    {
        return 'N';
    }
    else if (degree >= 22.5 && degree < 67.5)
    {
        return 'NE';
    }
    else if (degree >= 67.5 && degree < 112.5)
    {
        return 'E';
    }
    else if (degree >= 112.5 && degree < 157.5)
    {
        return 'SE';
    }
    else if (degree >= 157.5 && degree < 202.5)
    {
        return 'S';
    }
    else if (degree >= 202.5 && degree < 247.5)
    {
        return 'SW';
    }
    else if (degree >= 247.5 && degree < 292.5)
    {
        return 'W';
    }
    else
    {
        return 'NW';
    }
}
function secondsSinceEpochToTime(time)
{
    const date = new Date(time * 1000); // Date takes in time in ms and converts it to a valid time
    return date.toLocaleTimeString('en-US',
        {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true
        });
}

