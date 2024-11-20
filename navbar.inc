<nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
        <a class="navbar-brand" href="index.php">Home</a>
        <div class="collapse navbar-collapse">
            <div class="navbar-nav">
                <a class="nav-link" id="weather-link" href="weather.php">Current Weather</a>
                <a class="nav-link" id="forecast-link" href="forecast.php">5-Day Forecast</a>
            </div>
        </div>
        <div class="navbar-nav"  id="navbar-right">
            <a class="nav-link" id="login-link" href="login.php">Login</a>
            <a class="nav-link" id="register-link" href="register.php">Register</a>

            <div class="dropdown show" style="right: 50px">
                <a class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown"
                   aria-haspopup="true" aria-expanded="true" id="account-link" hidden>
                     <i class='bi bi-person-circle'></i>
                </a>
                <div class="dropdown-menu dropdown-menu-right" data-bs-toggle="dropdown">
                    <button id="logout-btn" class="dropdown-item">Logout</button>
                </div>
            </div>
            <a class="nav-link" id="settings-link" href="settings.php">
                <i class="bi bi-gear"></i>
            </a>
        </div>
    </div>
</nav>

