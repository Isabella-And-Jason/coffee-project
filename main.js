"use strict"

function renderCoffee(coffee) {
    var html = '<div class="coffee">';
    html += '<h1>' + coffee.name + '</h1>';
    html += '<p>' + coffee.roast + '</p>';
    html += '</div>';

    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for(var i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        } else if (coffee.all === selectedRoast) {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'Light', all: 'All'},
    {id: 2, name: 'Half City', roast: 'Light', all: 'All'},
    {id: 3, name: 'Cinnamon', roast: 'Light', all: 'All'},
    {id: 4, name: 'City', roast: 'Medium', all: 'All'},
    {id: 5, name: 'American', roast: 'Medium', all: 'All'},
    {id: 6, name: 'Breakfast', roast: 'Medium', all: 'All'},
    {id: 7, name: 'High', roast: 'Dark', all: 'All'},
    {id: 8, name: 'Continental', roast: 'Dark', all: 'All'},
    {id: 9, name: 'New Orleans', roast: 'Dark', all: 'All'},
    {id: 10, name: 'European', roast: 'Dark', all: 'All'},
    {id: 11, name: 'Espresso', roast: 'Dark', all: 'All'},
    {id: 12, name: 'Viennese', roast: 'Dark', all: 'All'},
    {id: 13, name: 'Italian', roast: 'Dark', all: 'All'},
    {id: 14, name: 'French', roast: 'Dark', all: 'All'},
];
// var coffees2 = coffees.sort();

// document.getElementById("all").addEventListener("click", renderCoffee);


var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');

tbody.innerHTML = renderCoffees(coffees.reverse());

submitButton.addEventListener('click', updateCoffees);
