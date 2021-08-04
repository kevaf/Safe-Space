

// business logic

$(document).ready(function(){
        $(".container").submit(function(event){
           
             
            var name1Input = $("input#name1").val();

           
            $(".firstname").append(name1Input);
            
         
    
            $("#report").show();
    
            event.preventDefault();
           
        });
       
    });
    
    
// $(document).ready(function(){
//  const name = document.getElementById('name1');
// const lastname = document.getElementById('name3');
// const location = document.getElementById('name2');
// const email = document.getElementById('email1');
// const phone = document.getElementById('phone-no');
// const age = document.getElementById('age1');
// const form = document.getElementById('form1');
// const errorElement =  document.getElementById('error');


//    let messages=[] 
//    if(phone.length <= 9){
//        messages.push('Phone number should be more than 9 digits')
//    }
//    if(messages.length > 0){
//        e.preventDefault()
//        errorElement.innerText = messages.join(', ')
//    }
// })