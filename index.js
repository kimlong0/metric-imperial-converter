const convertBtn = document.getElementById("convert-btn");
let inputEl = document.getElementById("input-el");
let length = document.getElementById("length");
let volume = document.getElementById("volume");
let mass = document.getElementById("mass")

//conversions
const meter = (inputEl.value / 3.281).toFixed(3);
const feet = (inputEl.value * 3.281).toFixed(3);
const liter = (inputEl.value / 0.264).toFixed(3);
const gallons = (inputEl.value * 0.264).toFixed(3);
const kilo = (inputEl.value / 2.204).toFixed(3);
const pounds = (inputEl.value * 2.204).toFixed(3);

convertBtn.addEventListener("click", function() {
    renderValues();
})

inputEl.addEventListener("keyup", function(press) {
    if (press.key === "Enter") {
        renderValues();
    }
})

function renderValues() {
    renderConvert(length, meter, feet, "meters", "feet");
    renderConvert(volume, liter, gallons, "liters", "gallons");
    renderConvert(mass, kilo, pounds, "kilos", "pounds");
    inputEl.placeholder = inputEl.value;
    inputEl.value = '';
}

function renderConvert(section, metricNum, imperialNum, metric, imperial) {
    if (inputEl.value == false) {
        inputEl.value = 0;
    }
    section.innerHTML = `${inputEl.value} ${metric} = ${imperialNum} ${imperial} | ${inputEl.value} ${imperial} = ${metricNum} ${metric}`;
}