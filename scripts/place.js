// Step 1: Footer year and last modified date
const currentyear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");
currentyear.textContent = new Date().getFullYear();
lastModified.textContent = "Last Modification: " + document.lastModified;

// Step 2: Static values for temperature and wind speed (match your weather table values)
const temperature = 29;   // Change to your value if needed
const windSpeed = 10;     // Change to your value if needed

// Step 3: Function to calculate windchill in Celsius & km/h
function calculateWindChill(tempC, speedKmh) {
    // Wind Chill formula (Canada, °C and km/h)
    return Math.round(
        13.12 + 0.6215 * tempC - 11.37 * Math.pow(speedKmh, 0.16) + 0.3965 * tempC * Math.pow(speedKmh, 0.16)
    );
}

// Step 4: Only calculate if conditions are met, otherwise display "N/A"
function displayWindChill() {
    let windChillDisplay = "N/A";
    if (temperature <= 10 && windSpeed > 4.8) {
        windChillDisplay = calculateWindChill(temperature, windSpeed) + "°C";
    }
    // Set the value in the Weather section
    const windChillSpan = document.getElementById("windchill-value");
    if (windChillSpan) windChillSpan.textContent = windChillDisplay;
}

// Run displayWindChill when the page loads
window.addEventListener('DOMContentLoaded', displayWindChill);
