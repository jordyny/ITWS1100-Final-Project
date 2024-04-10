$(function() {
    // Function to initially hide the about content
    $('#caitlin-about, #jordyn-about, #kaitlin-about').hide();

    // Function to toggle visibility of about content
    $('.toggle-about').click(function() {
        var target = $(this).data('target');
        var isVisible = $('#' + target).is(":visible");
        
        if (isVisible) {
            $(this).text('Show More'); 
        } else {
            $(this).text('Hide'); 
        }

        $('#' + target).slideToggle();
    });


    // Event listeners to handle "Hide" and "Show More" clicks
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

    // AJAX requests for each developer
    $.ajax({
        type: "GET",
        url: "./home/jsons/caitlin.json",
        dataType: "json",
        success: function(responseData, status){
            var output = "<ul>";  
            $.each(responseData.aboutYou, function(i, item) { 
                output += '<h3>' + item.major + '</h3>';
                output += '<h3>'+ item.funFact +'</h3>';
                output += '<h3>'+ item.favFood +'</h3>';
                output += '<br>';
            });
            output += "</ul>";
            $('#caitlin-about').html(output);
        },
        error: function(msg) {
            alert("There was a problem: " + msg.status + " " + msg.statusText);
        }
    });

    $.ajax({
        type: "GET",
        url: "./home/jsons/jordyn.json",
        dataType: "json",
        success: function(responseData, status){
            var output = "<ul>";  
            $.each(responseData.aboutYou, function(i, item) { 
                output += '<h3>' + item.major + '</h3>';
                output += '<h3>'+ item.funFact +'</h3>';
                output += '<h3>'+ item.favFood +'</h3>';
                output += '<br>';
            });
            output += "</ul>";
            $('#jordyn-about').html(output);
        },
        error: function(msg) {
            alert("There was a problem: " + msg.status + " " + msg.statusText);
        }
    });

    $.ajax({
        type: "GET",
        url: "./home/jsons/kaitlin.json",
        dataType: "json",
        success: function(responseData, status){
            var output = "<ul>";  
            $.each(responseData.aboutYou, function(i, item) { 
                output += '<h3>' + item.major + '</h3>';
                output += '<h3>'+ item.funFact +'</h3>';
                output += '<h3>'+ item.favFood +'</h3>';
                output += '<br>';
            });
            output += "</ul>";
            $('#kaitlin-about').html(output);
        },
        error: function(msg) {
            alert("There was a problem: " + msg.status + " " + msg.statusText);
        }
    });
});
