//i want the computer to choose what to eat and show it on the screen
var foods=[
"Sushi",
"Tuna",
"Steak"
];

var choose=(Math.floor(Math.random)*foods.length);
window.alert(foods[choose]);