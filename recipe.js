function selectedMeal(mealType) {
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

/*
$(document).ready(function() {
   $.ajax({
      type: "GET",
    	url: "",
    	dataType: "json",
   	success: function(responseData, status){
         var output = "";
         $.each(responseData.menuItem, function() {
            output += ("<a href='" + this.link + "' class=\"projects\">" + this.lab + ": " + this.name + "</a>" +
            "<p>" + this.description + "</p><br>");
         });
         $("#projects").css("display", "none");
         $("#projects").html(output);
         console.log("hi");
         $("#projects").animate({
             width: "toggle"
         }, 1500);
         }, error: function(msg) {
         // there was a problem
         alert("There was a problem: " + msg.status + " " + msg.statusText);
    	}
    })
})
*/