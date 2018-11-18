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
switchButton.addEventListener("click", toggle);

window.addEventListener("keyup", function(e){
    if (e.keyCode === 13) {
        convert();
    }
});

function convert(){
    if(farToCel.className === "hide"){
        converted = inputC.valueAsNumber * 1.8 + 32;
        tempF.textContent = formatNumber(converted);
    } else {
        converted = (inputF.valueAsNumber - 32) / 1.8;
        tempC.textContent = formatNumber(converted);
    }
}

function formatNumber(num){
    if(!Number.isInteger(num)){
        num = num.toFixed(2);
    }
    return num;
}

function toggle() {
    farToCel.classList.toggle("hide");
    celToFar.classList.toggle("hide");
}