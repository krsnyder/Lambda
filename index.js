var count = 0; // Initialize counter
var total = document.getElementById("total"); // Create variable for the cart counter element
var food = document.querySelectorAll("button"); // Get Nodelist of all buttons


// Iterate through Nodelist, adding an event listener to each item, and incrementing the count on each click
food.forEach(item => {
    item.addEventListener('click', () => {
        count++;
        total.innerHTML = count;
    });
});