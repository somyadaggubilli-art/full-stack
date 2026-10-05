const express = require("express");

const app = express();

// Logging middleware
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

// Home route
app.get("/", (req, res) => {
    res.send("Welcome to the Home Page");
});

// About route
app.get("/about", (req, res) => {
    res.send("This is the About Page");
});

// Start server
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});