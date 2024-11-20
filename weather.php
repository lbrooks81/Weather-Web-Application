<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Current Weather</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">

</head>
<body>
<?php require_once "navbar.inc"?>

    <main class="container">
        <div class="container d-flex justify-content-center text-center">
            <div class="card">
                <div class="card-body placeholder-glow" id="card-body">
                    <h1 id="header"><span class="placeholder col-12"></span></h1>
                    <div id="temperature">
                        Temperature:
                        <span class="placeholder col-3"></span>
                    </div>
                    <div id="feels-like">
                        Feels Like:
                        <span class="placeholder col-4"></span>
                    </div>
                    <div id="low-temp">
                        Low Temperature:
                        <span class="placeholder col-3"></span>
                    </div>
                    <div id="high-temp">
                        High Temperature:
                        <span class="placeholder col-3"></span>
                    </div>
                    <div id="humidity">
                        Humidity:
                        <span class="placeholder col-4"></span>
                    </div>
                    <div id="wind">
                        Wind Speed:
                        <span class="placeholder col-6"></span>
                    </div>
                    <div id="sunrise">
                        Sunrise:
                        <span class="placeholder col-3"></span>
                    </div>
                    <div id="sunset">
                        Sunset:
                        <span class="placeholder col-3"></span>
                    </div>
                </div>
            </div>
        </div>
        <div class="text-center" id="refresh-timer"></div>
    </main>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
    <script src="js/weather.mjs" type="module"></script>
</body>
</html>