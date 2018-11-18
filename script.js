var inputC = document.getElementById("inputC");
var inputF = document.getElementById("inputF");
var tempF = document.getElementById("tempF");
var tempC = document.getElementById("tempC");
var convertButton = document.getElementById("convertBtn");
var switchButton = document.getElementById("switch");
var farToCel = document.getElementById("farToCel");
var celToFar = document.getElementById("celToFar");
var converted = 0;

convertButton.addEventListener("click", convert);

// Enter key listener
window.addEventListener("keyup", function(e){
    if (e.keyCode === 13) {
        convert();
    }
});

function convert(){
    if(farToCel.className === "hide"){
        converted = inputC.valueAsNumber * 1.8 + 32;
        if(!Number.isInteger(converted)){
            converted = converted.toFixed(2);
        }
        tempF.textContent = converted;
    } else {
        converted = (inputF.valueAsNumber - 32) * .5556;
        if(!Number.isInteger(converted)){
            converted = converted.toFixed(2);
        }
        tempC.textContent = converted;
    }
}

function toggle() {
    farToCel.classList.toggle("hide");
    celToFar.classList.toggle("hide");
}