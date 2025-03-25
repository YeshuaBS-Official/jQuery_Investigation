// ✅ Step 1: Wait for the document to load before running any jQuery
$(document).ready(function() {
  
    $("#change-text").click(function(){
        $("#boxText").text("Hello world!");
    });

    $("#toggle-box").click(function(){
        $("#box").fadeToggle();
    });

    $("#add-message").click(function(){
        $("#boxText").append("<br><br> New Message");
    });

    $("#box").hover(function(){
        $("#box").css("background-color","pink");
        $("#box").css("border-color","red");
        $("#box").css("border-style","dotted");
    }, function(){
        $("#box").css("background-color","#d0e0f0");
        $("#box").css("border-color","#777");
        $("#box").css("border-style","solid");
    })

    $("#font-size-input").change(function(){
        let value = $("#font-size-input").val() + "px ";
        $("#font-size-input-text").text(value);
    });

    $("#Apply-Font-Settings").click(function(){
        let font = $("#font-select").val();
        let fontSize = $("#font-size-input").val() + "px";
        $("#box").css("font-family", font);
        $("#box").css("font-size", fontSize);
    });




    

  
    //  Step 6: EXTENSION — Create a dropdown in your HTML for font selection
    //  Create a <select> element with several <option> values (e.g., Arial, Georgia)
    //  Give it the ID #font-select
    //  Look at: https://www.w3schools.com/tags/tag_select.asp
  
    //  Step 7: EXTENSION — Create an <input> where users can enter font size (e.g., "24px")
    //  Give it the ID #font-size-input and add a button with ID #apply-font
  
    //  Step 8: EXTENSION — When "Apply Font Settings" is clicked:
    //  Use .val() to get the dropdown and input values
    //  Use .css() to apply those values to the #box
    //  Look at: https://www.w3schools.com/jquery/jquery_dom_get.asp
  
  });