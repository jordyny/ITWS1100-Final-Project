var breakfastButton = document.getElementById('breakfast');
var lunchButton = document.getElementById('lunch');
var dinnerButton = document.getElementById('dinner');
var snackButton = document.getElementById('snack');

function selectedMeal(mealType) {
   document.getElementById("selected-meal").textContent = "Selected Meal: " + mealType;
   if (mealType == "breakfast") {
      document.getElementById("button").bgcolor="#000000";
   }
}

document.querySelectorAll('.color-button').forEach(function(button) {
   button.addEventListener('click', function() {
     // Reset button colors
     button1.style.backgroundColor = defaultColor1;
     button2.style.backgroundColor = defaultColor2;

     // Change the color of the clicked button
     button.style.backgroundColor = 'red'; // You can change 'red' to any color you want
   });
 });