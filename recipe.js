// RANDOM RECIPE GENERATOR

function selectedMeal(mealType) {

   // update UI to show selected meal
   document.getElementById("selected-meal").textContent = "Selected Meal: " + mealType;
   document.getElementById('breakfast').style = 'background-color: #fdf5df'
   document.getElementById('lunch').style = 'background-color: #fdf5df'
   document.getElementById('dinner').style = 'background-color: #fdf5df'
   document.getElementById('dessert').style = 'background-color: #fdf5df'
   if (mealType == "Breakfast") {
      document.getElementById('breakfast').style = 'background-color: #ffd5ff;';
   } else if (mealType == "Lunch") {
      document.getElementById('lunch').style = 'background-color: #ffd5ff;';
   } else if (mealType == "Dinner") {
      document.getElementById('dinner').style = 'background-color: #ffd5ff;';
   } else if (mealType == "Dessert") {
      document.getElementById('dessert').style = 'background-color: #ffd5ff;';
   } 

   var JSONfile;

   if (mealType == "Breakfast") {
      JSONfile = "breakfast.json";
   }

   else if (mealType == "Lunch") {
      JSONfile = "lunch.json";
   }

   else if (mealType == "Dessert") {
      JSONfile = "dessert.json";
   }

   else if (mealType == "Dinner") {
      JSONfile = "dinner.json";
   }
   console.log(mealType);

   $.ajax({
      type: "GET",
      url: "resources/recipes/" + JSONfile,
      dataType: "json",
      success: function(data, status){
         console.log("Success:", data);
         var output = "";
         $.each(data.Meal, function(i, Lunch) {
            output += "<section class='card'>";
            output += "<img src='images/" + mealType + "/" + Lunch.image + "' alt='" + Lunch.desc + "'>";
            output += "<div class='texts'>";
            output += "<h2>" + Lunch.title + "</h2>";
            output += "<p>" + Lunch.desc + "</p>";
            output += "<button type='submit'>More details..</button>";
            output += "</div>";
            output += "</section>";
         });
         $(".container").html(output);
         
         // generate another recipe
         $("#generate-recipe").click(function() {
            location.reload();
         });
      },
      error: function(status, error) {
         console.log("Error:", status, error);
         // There was a problem
         alert("There was a problem: " + xhr.status + " " + xhr.statusText);
      }
   });
}

document.querySelectorAll('.color-button').forEach(function(button) {
   button.addEventListener('click', function() {
      // Reset button colors
      button1.style.backgroundColor = defaultColor1;
      button2.style.backgroundColor = defaultColor2;

      // Change the color of the clicked button
      button.style.backgroundColor = 'red'; 
   });
});

$(document).ready(function() {
   
});