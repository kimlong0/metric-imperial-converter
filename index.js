const convertBtn = document.getElementById("convert-btn");
let inputEl = document.getElementById("input-el");
let length = document.getElementById("length");
let volume = document.getElementById("volume");
let mass = document.getElementById("mass")

//conversions
let meter = 0;
let feet = 0;
let liter = 0;
let gallons = 0;
let kilo = 0;
let pounds = 0;

convertBtn.addEventListener("click", function() {
    renderValues();
})

inputEl.addEventListener("keyup", function(press) {
    if (press.key === "Enter") {
        renderValues();
    }
})

function renderValues() {
    meter = (inputEl.value / 3.281).toFixed(3);
    feet = (inputEl.value * 3.281).toFixed(3);
    liter = (inputEl.value / 0.264).toFixed(3);
    gallons = (inputEl.value * 0.264).toFixed(3);
    kilo = (inputEl.value / 2.204).toFixed(3);
    pounds = (inputEl.value * 2.204).toFixed(3);
    renderSection(length, meter, feet, "meters", "feet");
    renderSection(volume, liter, gallons, "liters", "gallons");
    renderSection(mass, kilo, pounds, "kilos", "pounds");
    inputEl.placeholder = inputEl.value;
    inputEl.value = '';
}

function renderSection(section, metricNum, imperialNum, metric, imperial) {
    if (inputEl.value == false) {
        inputEl.value = 0;
    }
    section.innerHTML = `${inputEl.value} ${metric} = ${imperialNum} ${imperial} | ${inputEl.value} ${imperial} = ${metricNum} ${metric}`;
}