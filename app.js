// R'N'R   December 11, 2023


// Declaring variables
const $nameSelect = $('#name-select');
const $coffeeSelect = $('#coffee-select');
const $ordersDisplay = $('#orders-display');

let orders = [];    //empty array to store coffee selections

const people = ['Angela', 'Ben', 'James', 'Ricky', 'Sam', 'Trish'];
const coffees = ['Black', 'Cappucino', 'Frappucino', 'Latte'];


// Function to populate the dropdown with names
function populateNamesDropdown() {
    $nameSelect.empty();
    people.forEach(person => {
        $nameSelect.append('<option value="' + person + '">' + person + '</option>');
    });
}
populateNamesDropdown();


// Function to populate the dropdown with coffees
function populateCoffeeDropdown() {
    $coffeeSelect.empty();
    coffees.forEach(coffee => {
        $coffeeSelect.append('<option value="' + coffee + '">' + coffee + '</option>');
    });
}
populateCoffeeDropdown();


// Event listener for the "Order my coffee" button
$('#order-now').click(function() {
    const selectedName = $nameSelect.val();
    const selectedCoffee = $coffeeSelect.val();

    // Add the new order to the orders array
    addOrder(selectedName, selectedCoffee);

    // Update the display of orders
    displayOrders();
});

// Function to add a new order
function addOrder(name, coffee) {
    orders.push({ name, coffee });
}

// Function to display all orders
function displayOrders() {
    $ordersDisplay.empty(); // Clear current orders display

    orders.forEach(order => {
        $ordersDisplay.append('<p>' + order.name + ' ordered a ' + order.coffee + '</p>');
    });
}


// Event listener for the "Clear all" button
$('#clear-all').click(function() {
    clearOrders();
});

// Function to clear all orders
function clearOrders() {
    orders = []; // Reset the orders array to empty
    $ordersDisplay.empty(); // Clear the display
}


