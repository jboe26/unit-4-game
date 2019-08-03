$(document).ready(function() {

    // Make our variables global to the runtime of our application
    var characters = 0;
    var enemies = 0;
    var defenders = 0;
    var attack = 0;
    

    // Use a function to initialize our calculator.
    // This way when the user hits clear, we can guarantee a reset of the app.
    function chooseCharacter() {
        characters = 0;
        enemies = 0;
        defenders = 0;
        attack = 0;
        

      $("#first-number, #second-number, #operator, #result").empty();
    }

    $(".characters").on("click", function() {


      if (chooseCharacter) {
    
    
    }
    
    $(".yours").on("click", function() {

     
    $(".enemies").on("click", function() {

    }