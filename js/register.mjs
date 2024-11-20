import { updateGUI } from "./utils.mjs";
document.addEventListener('DOMContentLoaded', () =>
{
    updateGUI();

    const form = document.getElementById('register-form');

    form.addEventListener('submit', (event) =>
    {
        event.preventDefault();
        if (passwordsMatch())
        {
            const emailInput = document.getElementById('email-input').value;
            const passwordInput = document.getElementById('password-input').value;
            const message = document.getElementById('message');
            const messageDiv = document.getElementById('message-div');

            const userCredentials = localStorage.getItem(emailInput);

            if(userCredentials)
            {
                messageDiv.removeAttribute('hidden');
                message.textContent = "A user with that email already exists.";
            }
            else
            {
                messageDiv.setAttribute('hidden', 'true');
                message.textContent = "";
                localStorage.setItem(emailInput, passwordInput);
            }

            document.getElementById('form-items').setAttribute('hidden', 'true');

            messageDiv.removeAttribute('hidden');
            message.classList.remove('alert-danger');
            message.classList.add("alert-success");
            message.textContent = "Registration successful, logging you in and redirecting you to the home page.";

            document.cookie = `email=${emailInput}`;

            setTimeout(() =>
            {
                window.location.href = 'http://localhost:63342/it211-project2-lbrooks81/index.php';
            }, 3000)
        }
    });
});

function passwordsMatch()
{
    const passwordInput = document.getElementById('password-input');
    const passwordConfirm = document.getElementById('confirm-password');
    const message = document.getElementById('message');
    const messageDiv = document.getElementById('message-div');

    if (passwordInput.value !== passwordConfirm.value)
    {
        messageDiv.removeAttribute('hidden');
        message.textContent = "Passwords don't match. Please try again"
        return false;
    }

    return true;
}
