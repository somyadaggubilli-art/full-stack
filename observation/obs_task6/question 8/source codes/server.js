const express = require("express");

const app = express();

const PORT = 3000;

// Middleware for logging requests
function logger(req, res, next) {
    console.log("Request received:");
    console.log("Method:", req.method);
    console.log("URL:", req.url);

    next();
}

// Use middleware
app.use(logger);

// Home route
app.get("/", function(req, res) {
    res.send("Welcome to the Express Server");
});

// About route
app.get("/about", function(req, res) {
    res.send("This is the About page");
});

// Start server
app.listen(PORT, function() {
    console.log("Server running at http://localhost:" + PORT);
});