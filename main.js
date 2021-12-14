"use strict"
// my personal Project for practice

function renderCoffee(coffee) {
    var html = '<div class="coffee card shadow-sm p-1 bg-white rounded">';
    html += '<img src="Screen%20Shot%202021-11-17%20at%201.51.16%20PM.png" alt="coffee" style="width:350px; height: auto; ">'
    html += '<div class="card-body">' + '<h2 class ="card-title" style="color: red; font-weight: bold">' + coffee.name +'</h2>';
    html += '<h5 class ="card-text">' + "BLEND | "  + coffee.roast + " roast" + '</h5>';
    html += '<h5 class="card-text">' + "12 oz | $14.95" +  '</h5>';
    html += '</div>';
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
    coffees.forEach(function (coffee) {
        if (selectedRoast === 'all') {
            filteredCoffees.push(coffee);
        } else if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

// Search roast function
// function matchName(coffee, search) {
//     if(search === '') return true;
//     return (coffee.name.toLowerCase().indexOf(search[i]) >= 0);
// }

function coffeeSearch() {
    var searchCoffee = searchBox.value.toUpperCase();
    var filteredCoffees = [];
    console.log(searchCoffee);
    coffees.forEach(function (coffee) {
        if (coffee.name.toUpperCase().includes(searchCoffee)) {
        filteredCoffees.push(coffee);
            console.log(searchCoffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);

}

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];

var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');

var searchBox = document.querySelector("#searchBoxButton");

tbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);
searchBox.addEventListener('click', coffeeSearch);