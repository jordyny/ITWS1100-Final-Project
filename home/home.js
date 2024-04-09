$(function() {
    $.ajax({
        // HTTP method used for the request
        type: "GET",
        url: "./json/caitlin.json",
        dataType: "json",
        // function for successful response
        success: function(responseData, status){
            var output = "<ul>";  
            // loops through each item in the json response
            $.each(responseData.aboutYou, function(i, item) { 
                output += '<h3>' + item.name + '</h3>';
                output += '<h3>'+ item.fun-fact +'</h3>';
                output += '<br>';
            });
            output += "</ul>";
            //insert html into the div with the id projects-menu
            $('#caitlin-about').html(output);
        },
        // error handle
        error: function(msg) {
            alert("There was a problem: " + msg.status + " " + msg.statusText);
        }
    });

    $.ajax({
        // HTTP method used for the request
        type: "GET",
        url: "./json/jordyn.json",
        dataType: "json",
        // function for successful response
        success: function(responseData, status){
            var output = "<ul>";  
            // loops through each item in the json response
            $.each(responseData.aboutYou, function(i, item) { 
                output += '<h3>' + item.name + '</h3>';
                output += '<h3>'+ item.fun-fact +'</h3>';
                output += '<br>';
            });
            output += "</ul>";
            //insert html into the div with the id projects-menu
            $('#jordyn-about').html(output);
        },
        // error handle
        error: function(msg) {
            alert("There was a problem: " + msg.status + " " + msg.statusText);
        }
    });

    $.ajax({
        // HTTP method used for the request
        type: "GET",
        url: "./json/kaitlin.json",
        dataType: "json",
        // function for successful response
        success: function(responseData, status){
            var output = "<ul>";  
            // loops through each item in the json response
            $.each(responseData.aboutYou, function(i, item) { 
                output += '<h3>' + item.name + '</h3>';
                output += '<h3>'+ item.fun-fact +'</h3>';
                output += '<br>';
            });
            output += "</ul>";
            //insert html into the div with the id projects-menu
            $('#kaitlin-about').html(output);
        },
        // error handle
        error: function(msg) {
            alert("There was a problem: " + msg.status + " " + msg.statusText);
        }
    });

    
    // Event listeners updated to use .on()
    $("#hideC").on("click", function() {
        $("#caitlin-about").fadeOut(500);
    });

    $("#showC").on("click", function() {
        $("#caitlin-about").fadeIn(500);
    });

    $("#hideJ").on("click", function() {
        $("#jordyn-about").fadeOut(500);
    });
        
    $("#showJ").on("click", function() {
        $("#jordyn-about").fadeIn(500);
    });

    $("#hideK").on("click", function() {
        $("#kaitlin-about").fadeOut(500);
    });
        
    $("#showK").on("click", function() {
        $("#kaitlin-about").fadeIn(500);
    });
});
    
