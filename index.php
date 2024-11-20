<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Home</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
</head>
<body>

    <?php require_once "navbar.inc"?>
    <main class="container"></main>
    <div class="container d-flex justify-content-center">
        <table>
            <tr>
                <td>
                    <h3 class="text-center" id="user-greeting"></h3>
                </td>
            </tr>
            <tr>
                <td>
                    <h3 class="text-center" id="zipcode"></h3>
                </td>
            </tr>
            <tr class="container d-flex justify-content-center" id="links" hidden>
                <td>
                    <a class="btn btn-primary m-3" href="weather.php">Current Weather</a>
                    <a class="btn btn-primary m-3" href="forecast.php">Five-Day Forecast</a>
                </td>
            </tr>
        </table>

    </div>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
<script src="js/index.mjs" type="module"></script>
</body>
</html>