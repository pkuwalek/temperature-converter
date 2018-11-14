var inputC = document.querySelector("input");
var tempF = document.getElementById("tempF");
var convertButton = document.querySelector("button");
var converted = 0;

convertButton.addEventListener("click", function(){
    converted = inputC.valueAsNumber * 1.8 + 32;
    console.log(typeof(converted))
    if(Number.isInteger(converted)){
        tempF.textContent = converted;
    } else
    tempF.textContent = converted.toFixed(2);
});