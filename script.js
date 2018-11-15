var inputC = document.querySelector("input");
var tempF = document.getElementById("tempF");
var convertButton = document.querySelector("button");
var switchButton = document.getElementById("switch");
var converted = 0;

convertButton.addEventListener("click", function(){
    converted = inputC.valueAsNumber * 1.8 + 32;
    if(!Number.isInteger(converted)){
        converted = converted.toFixed(2);
    }
    tempF.textContent = converted;
});

// Enter key listener
inputC.addEventListener("keyup", function(e){
    if (e.keyCode === 13) {
        converted = inputC.valueAsNumber * 1.8 + 32;
        if(!Number.isInteger(converted)){
            converted = converted.toFixed(2);
        }
        tempF.textContent = converted;
    }  
});
