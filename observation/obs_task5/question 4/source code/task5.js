// Get HTML elements
var heading = document.getElementById("heading");
var message = document.getElementById("message");
var image = document.getElementById("myImage");

var contentButton = document.getElementById("changeContent");
var styleButton = document.getElementById("changeStyle");
var imageButton = document.getElementById("changeImage");

// Change content
contentButton.addEventListener("click", function() {
    message.textContent = "The content was changed using JavaScript!, hurrreyyyy!!!!";
});

// Change style
styleButton.addEventListener("click", function() {
    heading.style.color = "blue";
    heading.style.fontSize = "40px";
});

// Change attribute
imageButton.addEventListener("click", function() {
    image.setAttribute(
        "src", 
         "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" 
    );
    image.setAttribute("alt", "JavaScript Logo");
    message.textContent = "The image alt attribute was changed!";
});