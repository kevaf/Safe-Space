

// business logic

$(document).ready(function(){
        $("#form").submit(function(event){
            var name1Input = $("input#name1").val();
            var cae1Input = $("input#case1").val();
           
            $(".name1").append(name1Input);
            $(".case1").append(case1Input);
            // $(".animal").append(animalInput);
            // $(".exclamation").append(exclamationInput);
            // $(".verb").append(verbInput);
            // $(".noun").append(nounInput);
    
            $("#report").show();
    
            event.preventDefault();
        });
    });


// $(document).ready(function() {
    
//     $(".form-group #form").submit(function(event) {
//       var blanks = ["name1", "case1"];

//       form.forEach(function(forms) {
      
//         var userInput = $("input." + forms).val();
//         // below are important tools of trade for debugging
//         // debugger
//         // console.log(userInput);
//         $("." + forms).text(userInput);
//       });

//       $("#report").show();

//       event.preventDefault();
//     });
//   });