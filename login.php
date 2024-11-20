<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Login</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">

</head>
<body>
    <?php require_once "navbar.inc"?>
    <main class="container">
    <div class="container d-flex justify-content-center">
        <form id="login-form">
            <h1>Login</h1>
            <div class="mb-3" id="error-div" hidden>
                <p class="alert alert-danger align-middle" id="error-message"></p>
            </div>
                <div id="form-items">
                <div class="mb-3">
                    <label class="form-label" for="email-input">Email</label>
                    <input class="form-control" id="email-input" type="email" placeholder="Enter your email address">
                </div>
                <div class="mb-3">
                    <label class="form-label" for="password-input">Password</label>
                    <input class="form-control" id="password-input" type="password" placeholder="Enter your password">
                </div>
                <button class="btn btn-primary" type="submit">Login</button>
                <div class="mb-3">
                    <p>Don't have an account? <a href="register.php">Click here to register.</a></p>
                </div>
            </div>
        </form>
    </div>
</main>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
<script src="js/utils.mjs" type="module"></script>
<script src="js/login.mjs" type="module"></script>
</body>
</html>