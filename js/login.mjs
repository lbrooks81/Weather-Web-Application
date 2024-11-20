import { updateGUI } from "./utils.mjs";
document.addEventListener('DOMContentLoaded', () =>
{
    const emailInput = document.getElementById('email-input');
    const form = document.getElementById('login-form');

    form.addEventListener('submit', (event) =>
    {
        event.preventDefault();
        if (validateCredentials() === true)
        {
            document.cookie = `email=${emailInput.value}`;
            setTimeout(() =>
            {
                window.location.href = 'http://localhost:63342/it211-project2-lbrooks81/index.php';
            }, 3000);
        }
    });

    updateGUI();
});


function validateCredentials()
{
    const emailInput = document.getElementById('email-input').value;
    const passwordInput = document.getElementById('password-input').value;

    const message = document.getElementById('error-message');
    const messageDiv = document.getElementById('error-div');

    const credentials = localStorage.getItem(emailInput);

    //* Email validation
    if (credentials === false)
    {
        messageDiv.removeAttribute('hidden');
        message.textContent = "Couldn't find your account"
        return false;
    }
    //* Password validation
    else if (credentials !== passwordInput)
    {
        messageDiv.removeAttribute('hidden');
        message.textContent = "Incorrect password. Please try again"
        return false;
    }
    //* User has successfully logged in
    else
    {
        messageDiv.removeAttribute('hidden');
        message.classList.remove('alert-danger');
        message.classList.add("alert-success");
        message.textContent = "Login successful, redirecting you to the home page.";

        document.getElementById('form-items').style.display = 'none';

        return true;
    }
}

