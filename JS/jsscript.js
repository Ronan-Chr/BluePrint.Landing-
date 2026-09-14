// Grab the form and make a spot to show a message
let form = document.querySelector("form");
let message = document.createElement("p");
form.appendChild(message);

// This function shows text and color in the message spot
function showMessage(text, color) {
    message.textContent = text;
    message.style.color = color;
}

// Event listener submission message 
form.addEventListener("submit", function (event) {
    event.preventDefault(); 
    let email = document.querySelector("input").value;

    if (email === "") {
        showMessage("Please enter an email.");
    } else {
        showMessage("Thanks! You're on the list.", "#6ea8dc");
        form.reset();
    }
});

// Event listener card selection
let cards = document.querySelectorAll(".card");

cards.forEach(function (card) {
    card.addEventListener("click", function () {
        card.classList.toggle("selected");
    });
});
