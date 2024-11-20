import {updateGUI, getCookieValue, logout, checkLoginStatus} from "./utils.mjs";

document.addEventListener('DOMContentLoaded', () =>
{
    if (checkLoginStatus() === false)
    {
       window.location.href = 'http://localhost:63342/it211-project2-lbrooks81/login.php';
    }
    document.getElementById('logout-btn')
        .addEventListener('click', () =>
        {
            logout();
        });

    updateGUI();
    displayGreeting();

});

function displayGreeting()
{
    const userGreeting = document.getElementById('user-greeting');
    const zipcode = document.getElementById('zipcode');

    const email = getCookieValue('email')
    const zip= localStorage.getItem(`${email}-zip-code`);


    if(email)
    {
        userGreeting.textContent = `Hello, ${email}!`;
        document.getElementById('links').removeAttribute('hidden');
        if(zip)
        {
            zipcode.textContent = `Your current zip-code is ${zip}`;
        }
        else
        {
            zipcode.textContent = `Please enter your zipcode on the settings page to see your local weather.`;
        }
    }
    else
    {
        userGreeting.textContent = 'Please log in to continue.';
    }
}