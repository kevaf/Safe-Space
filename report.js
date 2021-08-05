// functionality js starts



var price , crust_price, topping_price;
let total = 0;
function addCase( name,gender,age,topping, firstname, location, phone){
  this.case = name;
  this.gender = gender;
  this.age = age;
  this.topping = topping;
  this.person = firstname;
  this.location = location;
  this.phone = phone;
 
}
 function validate(){

  if(name.value == 0 || gender.value == 0 || age.value == 0 || firstname =="" || location ==""){
    alert("Confirm all fields has values")
}
// else if(phone.length < 9){
//     alert("Phone should more than 9 digits")
// }
 }

// proceed button
$(document).ready(function(){
  // $("button.proceed").click(function(){
  //   $("button.proceed").hide();
  //   $("#information").hide();
  //   $("div.choise").slideDown(1000);
  // });
  $("button.proceed").click(function(event){
   
   let pname = $(".name option:selected").val();
   let pgender = $("#gender option:selected").val();
   let page = $("#age option:selected").val();
   let pfname = $("input#fname").val();
   let ptopping = [];
   $.each($("input[name='parents']:checked"), function(){            
       ptopping.push($(this).val());
   });
   console.log(ptopping.join(", "));

   
    let topping_value = ptopping.length;
    console.log("toppins value" + topping_value);

    if((pname == "") && (pgender == "" )){
    
      console.log("nothing selected");
      $("button.proceed").show();
      $("#information").show();
      $("div.choise").hide();
      alert("Please select case and gender"); 
    }
    else{
      $("button.proceed").hide();
      $("#information").hide();
      $("div.choise").slideDown(1000);
    }

    // total = price + crust_price + topping_value;
    // console.log(total);
    // let checkoutTotal =0;
    // checkoutTotal = checkoutTotal + total;

    $("#pizzaname").html($(".name option:selected").val());
    $("#pizzasize").html( $("#size option:selected").val());
    $("#pizzacrust").html($("#crust option:selected").val());
    $("#pizzatopping").html(ptopping.join(", "));
    $("#totals").html(total);
    
// Add pizza button
    $("button.addPizza").click(function(){
      let pname = $(".name option:selected").val();
      let pgender = $("#gender option:selected").val();
      let page = $("#age option:selected").val();
      let pfname = $("input#fname").val();
      let ptopping = [];
      $.each($("input[name='parents']:checked"), function(){            
          ptopping.push($(this).val());
      });
      
      // constractor function
      var newOrder = new addCase(pname,pfname, pgender, page,ptopping,total);

      $("#info-given").append('<tr><td id="casename">'+newOrder.case +'</td><td id="gendername">' +newOrder.gender +'</td><td id="who">' + newOrder.person + '</td><td id="agebracket">'+newOrder.age + '</td><td id="who">'+newOrder.topping+'</td></tr>');
      console.log(newOrder);
      
      

    });
    // Logout button
    $("button#checkout").click(function(){ 
      $("button#checkout").hide();
      $("button.addCase").hide();
      $("button.proceed").show();
      $("button.deliver").slideDown(1000);
      $("#addedprice").slideDown(1000);
      console.log("Your total bills is sh. "+checkoutTotal);
      $("#casestotal").append("Your case of "+newOrder.name+  "has been recieved");
    });

    // // home delivery button
    // $("button.deliver").click(function(){
    //   $(".casestable").hide();
    //   $(".choise h2").hide();
    //   $(".delivery").slideDown(1000);
    //   $("#addedprice").hide();
    //   $("button.deliver").hide();
    //   $("#casestotal").hide();
    //   let deliceryamount= checkoutTotal+150;
    //   console.log("You will pay sh. "+deliceryamount+" on delivery");
    //   $("#totalbill").append("Your bill plus delivery fee is: "+deliceryamount);
    // });

    // when one clicks place order button
    $("button#final-order").click(function(event){
      event.preventDefault();

      $("#pizzatotal").hide();
      $(".delivery").hide();
      $("button#final-order").hide();
      let deliceryamount= checkoutTotal;
      console.log("Final Bill is: "+deliceryamount);
      let person = $("input#name").val();
      let phone = $("input#phone").val();
      let location = $("input#location").val();

      if ($("input#name").val() && $("input#phone").val() && $("input#location").val()!=""){
  
        $("#finallmessage").append(person+", We have recieved your order and it will be delivered to you at "+location+ ". Prepare sh. "+deliceryamount);
        $("#totalbill").hide();
        $("#finallmessage").slideDown(1200);
      }
      else {
        alert("Please fill in the details for delivery!");
        $(".delivery").show();
        $("button#final-order").show();
      }
    });
   event.preventDefault();
  });
});



// functionality js starts

// $(document).ready(function(){
//         $(".container").submit(function(event){
           
             
//             var name1Input = $("input#name1").val();
//             var name1Input = $("input#name1").val();

           
//             $(".firstname").append(name1Input);
            
         
    
//             $("#report").show();
    
//             event.preventDefault();
           
//         });
       
//     });
    
    
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