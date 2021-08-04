

// business logic

$(document).ready(function(){
        $(".container").submit(function(event){
            
            var name1Input = $("input#name1").val();
            var case1Input = $("#case1 option:selected").val();
           
            $(".name1").append(name1Input);
            $(".case1").append(case1Input);
         
    
            $("#report").show();
    
            event.preventDefault();
        });
    });


