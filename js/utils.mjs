export { updateGUI, getCookieValue, checkLoginStatus, logout};
function updateGUI()
{
    //* Updates Visual Theme
    const htmlTag = document.querySelector('html');

    if (getCookieValue(`${getCookieValue('email')}-darkmode`) === "true")
    {
        htmlTag.setAttribute('data-bs-theme', 'dark');
    }
    else
    {
        htmlTag.setAttribute('data-bs-theme', 'theme');
    }

    const weatherLink = document.getElementById('weather-link');
    const forecastLink = document.getElementById('forecast-link');
    const loginLink = document.getElementById('login-link');
    const registerLink = document.getElementById('register-link');
    const accountLink = document.getElementById('account-link');
    const settingsLink = document.getElementById('settings-link');

    const guestLinks = [ loginLink, registerLink ];
    const userLinks = [ weatherLink, forecastLink, accountLink, settingsLink ];

    //* Hides guest-only pages
    if(checkLoginStatus() === true)
    {
        for (let link of userLinks)
        {
            link.removeAttribute('hidden');
        }
        for (let link of guestLinks)
        {
            link.setAttribute('hidden', 'true');
        }
    }
    //* Hides user accessible links
    else
    {
        for (let link of guestLinks)
        {
            link.removeAttribute('hidden');
        }
        for (let link of userLinks)
        {
            link.setAttribute('hidden', 'true');
        }
    }
}

function getCookieValue(name) {
    return document.cookie.split(";")
        .find(r => r.includes(name))
        ?.split("=")[1];
}

function checkLoginStatus()
{
    //* Returns true if the user is logged in
    return !!getCookieValue('email');
}

function logout()
{
    const date = new Date();
    document.cookie = `email='';expires=${date.toUTCString()};`;
    window.location.href = 'http://localhost:63342/it211-project2-lbrooks81/login.php';
}

