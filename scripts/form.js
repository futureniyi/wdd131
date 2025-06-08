// use the date object
const today = new Date();

// Get the span and p elements
const currentyear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

// Put the current year in the span
// currentyear.textContent = new Date().getFullYear();


// Use innerHTML to wrap the year in a styled span
currentyear.innerHTML = `<span class="highlight">${new Date().getFullYear()}</span>`;


// Show when the page was last updated
lastModified.textContent = "Last Modification: " + document.lastModified;

const products = [
    { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
    { id: "fc-2050", name: "power laces", averagerating: 4.7 },
    { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
    { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
    { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
];

document.addEventListener("DOMContentLoaded", function () {
    const select = document.querySelector('select[name="product"]');
    if (select) {
        select.innerHTML = '';

        const placeholder = document.createElement("option");
        placeholder.value = "";
        placeholder.disabled = true;
        placeholder.selected = true;
        placeholder.textContent = "Select a Product ...";
        select.appendChild(placeholder);

        // Sort the products array alphabetically by name
        products
            .slice() // copy array so original is not affected
            .sort((a, b) => a.name.localeCompare(b.name))
            .forEach(product => {
                const option = document.createElement("option");
                option.value = product.id;
                option.textContent = product.name;
                select.appendChild(option);
            });
    }
});

// Only run this on the review.html page
if (window.location.pathname.endsWith("review.html")) {
    // Get current count (as string), convert to number, or start at 0
    let reviewCount = Number(localStorage.getItem("reviewCount") || 0);
    reviewCount += 1; // Increment

    localStorage.setItem("reviewCount", reviewCount);

    // Show review count on the page
    const reviewSection = document.querySelector('.review, .wf1'); // whichever class your confirmation card uses
    if (reviewSection) {
        // const counter = document.createElement("p");
        // counter.style.marginTop = "2rem";
        // counter.style.color = "#2c235a";
        // counter.textContent = `You have submitted ${reviewCount} review${reviewCount > 1 ? 's' : ''}.`;
        // reviewSection.appendChild(counter);
        const counter = document.createElement("p");
        counter.classList.add("review-count"); // <-- Add this line
        counter.textContent = `You have submitted ${reviewCount} review${reviewCount > 1 ? 's' : ''}.`;
        reviewSection.appendChild(counter);

    }
}

  