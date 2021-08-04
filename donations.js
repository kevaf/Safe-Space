$(document).ready(function(){
    $("#donbtn").click(function(){
        var clickedAmount=document.getElementById("clickVal").value;
        var typedAmount=document.getElementById("amt").value;
        var paymentOption=document.getElementById("payment").value;
        
        if((clickedAmount=="" && typedAmount=="") || paymentOption==""){
            alert("Choose All Options")
        }
        else if(clickedAmount=="100" && typedAmount==""){
            document.getElementById("don").innerHTML=100 + " via " + paymentOption
        }
        else if(clickedAmount=="200" && typedAmount==""){
            document.getElementById("don").innerHTML=200 + " via " + paymentOption
        }
        else if(clickedAmount=="500" && typedAmount==""){
            document.getElementById("don").innerHTML=500 + " via " + paymentOption
        }
        else if(clickedAmount=="1000" && typedAmount==""){
            document.getElementById("don").innerHTML=1000 + " via " + paymentOption
        }
        else if(typedAmount>0 && clickedAmount==""){
            document.getElementById("don").innerHTML=typedAmount + " via " + paymentOption
        }
        
    })






});

