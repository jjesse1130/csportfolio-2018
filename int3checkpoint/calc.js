var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
var op = document.getElementById("operator");
var calculate = document.getElementById("calculate");
var display = document.getElementById("display");

calculate.addEventListener("click", function(){
    var number1 = +num1.value;
    var number2 = +num2.value;
    var operator = op.value;
    
    if(operator === "+"){
        display.innerHTML = number1 + number2;
    }
    
});
