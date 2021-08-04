$(document).ready(function(){
    $("#donbtn").click(function(){
        var clickedAmount=document.getElementById("clickVal").value;
        var typedAmount=document.getElementById("amt").value;
        var paymentOption=document.getElementById("payment").value;
        
        if((clickedAmount=="" && typedAmount=="") || paymentOption==""){
            alert("Choose All Options")
        }
        else if(clickedAmount=="100" && typedAmount==""){
            document.getElementById("don").innerHTML=100 
            alert("Thank You for your "+paymentOption +" Donation" )
        }
        else if(clickedAmount=="200" && typedAmount==""){
            document.getElementById("don").innerHTML=200 
            alert("Thank You for your "+paymentOption +" Donation" )
        }
        else if(clickedAmount=="500" && typedAmount==""){
            document.getElementById("don").innerHTML=500 
            alert("Thank You for your "+paymentOption +" Donation" )
        }
        else if(clickedAmount=="1000" && typedAmount==""){
            document.getElementById("don").innerHTML=1000 
            alert("Thank You for your "+paymentOption +" Donation" )
        }
        else if(typedAmount>0 && clickedAmount==""){
            document.getElementById("don").innerHTML=typedAmount 
            alert("Thank You for your "+paymentOption +" Donation" )
        }
        
    })






});

