<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Quote Generator</title>
    <link rel="icon" type="image/png" href="https://s2.googleusercontent.com/s2/favicons?domain=www.codeofliving.com">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="quote-container" id="quote-container">
        <!-- Quote -->
        <div class="quote-text">
            <i class="fas fa-quote-left"></i>
            <span id="quote"></span>
        </div>
        <!-- Author -->
        <div class="quote-author">
            <span id="author"></span>
        </div>
        <!-- Buttons -->
        <div class="button-container">
            <button class="twitter-button" id="twitter" title="Tweet This!">
                <i class="fab fa-twitter"></i>
            </button>
            <button id="new-quote">New Quote</button>
        </div>
    </div>
    <!-- Loader -->
    <div class="loader" id="loader"></div>
    <!-- Script -->
    <script src="script.js"></script>
</body>
</html>
