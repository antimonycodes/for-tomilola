let button = document.getElementById("button");
let card = document.getElementById("card");

function clickMe() {
  // Toggle the 'display' property of the card
  card.style.display =
    card.style.display === "none" || card.style.display === ""
      ? "flex"
      : "none";

  // Hide the button when the card is visible
  button.style.display = card.style.display === "none" ? "block" : "none";
}

// Attach the click event listener to the button
button.addEventListener("click", clickMe);
