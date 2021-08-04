

// business logic
$(document).ready(function() {
    $("#form").submit(function(event) {
      var blanks = ["person1", "person2", "animal", "exclamation", "verb", "noun"];

      form.forEach(function(blank) {
      
        var userInput = $("input." + blank).val();
        // below are important tools of trade for debugging
        // debugger
        // console.log(userInput);
        $("." + blank).text(userInput);
      });

      $("#report").show();

      event.preventDefault();
    });
  });