let fruits = ["Apple", "Banana", "Mango", "Orange"];

function displayFruits() {
let result = "Fruits: ";

for (let i = 0; i < fruits.length; i++) {
    result += fruits[i] + " ";
}

document.getElementById("output").textContent = result;

}

function addFruit() {
fruits.push("Grapes");
displayFruits();
}
