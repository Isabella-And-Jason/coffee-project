"use strict"

function renderCoffee(coffee) {
    var html = '<div class="coffee">';
    html += '<h1 id="name">' + coffee.name + '</h1>';
    html += '<p id="roast">' + coffee.roast + '</p>';
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
    e.preventDefault();// don't submit the form, we just want to update the data
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

function searchCoffees () {
    var searchedCoffee = searchCoffee.value.toLowerCase();
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];

    coffees.forEach(function (coffee) {
        if ((coffee.name.toLowerCase().includes(searchedCoffee) && (coffee.roast === selectedRoast || coffee.all === selectedRoast))) {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}


function addCoffee() {
    var newCoffee = {};
    newCoffee.id = coffees.length + 1;
    newCoffee.name = document.getElementById('add-coffee').value;
    newCoffee.roast = document.getElementById('new-roast-selection').value;
    newCoffee.all = "All";
    console.log(newCoffee);

    coffees.push(newCoffee);

    tbody.innerHTML = renderCoffees(coffees);

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

console.log(coffees);


var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
var searchCoffee = document.querySelector('#search-coffee');

tbody.innerHTML = renderCoffees(coffees.reverse());

roastSelection.addEventListener('change', updateCoffees);
searchCoffee.addEventListener('keyup', searchCoffees);
submitButton.addEventListener('click', addCoffee);
