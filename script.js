var inputC = document.querySelector("input");
var tempF = document.getElementById("tempF");
var convertButton = document.querySelector("button");
var converted = 0;

convertButton.addEventListener("click", function(){
    converted = inputC.valueAsNumber * 1.8 + 32;
    if(!Number.isInteger(converted)){
        converted = converted.toFixed(2);
    }
    tempF.textContent = converted;
});