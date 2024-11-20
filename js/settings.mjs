import { getCookieValue, updateGUI, logout } from "./utils.mjs";

document.addEventListener('DOMContentLoaded', () =>
{
    document.getElementById('logout-btn')
        .addEventListener('click', () =>
        {
            logout();
        });

    updateGUI();
    const zipCode = document.getElementById('zip-code');
    const userEmail = getCookieValue('email');
    const darkModeSwitch = document.getElementById('dark-mode-switch');
    const saveButton = document.getElementById('save-btn');

    darkModeSwitch.checked = getCookieValue(`${userEmail}-darkmode`) === "true";

    saveButton.addEventListener('click', () =>
    {
        localStorage.setItem(`${userEmail}-zip-code`, zipCode.value);

        let darkMode = darkModeSwitch.checked;
        document.cookie = `${userEmail}-darkmode=${String(darkMode)};`;
        updateGUI();
    });

});



