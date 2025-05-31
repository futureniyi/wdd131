// Step 1: Footer year and last modified date
const currentyear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");
currentyear.textContent = new Date().getFullYear();
lastModified.textContent = "Last Modification: " + document.lastModified;