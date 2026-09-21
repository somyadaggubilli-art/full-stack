// Get HTML elements
var quantity = document.getElementById("quantity");
var price = document.getElementById("price");
var total = document.getElementById("total");
var message = document.getElementById("message");

// Function to calculate total price
function calculateTotal() {
    var quantityValue = Number(quantity.value);
    var priceValue = Number(price.value);

    if (quantityValue <= 0 || priceValue < 0) {
        message.textContent = "Please enter valid values.";
        total.textContent = "0";
        return;
    }

    var totalPrice = quantityValue * priceValue;

    total.textContent = totalPrice;
    message.textContent = "";
}

// Event listeners
quantity.addEventListener("input", calculateTotal);
price.addEventListener("input", calculateTotal);

// Calculate when page loads
calculateTotal();
