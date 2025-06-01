// use the date object
const today = new Date();

// Get the span and p elements
const currentyear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

// Put the current year in the span
currentyear.textContent = new Date().getFullYear();


// Use innerHTML to wrap the year in a styled span
// currentyear.innerHTML = `<span class="highlight">${new Date().getFullYear()}</span>`;


// Show when the page was last updated
lastModified.textContent = "Last Modification: " + document.lastModified;

// 
const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');

// Add a click event listender to the hamburger button and use a callback function that toggles the list element's list of classes.
hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
});

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    // Add more temple objects here...
    {
        templeName: "Newport Beach California",
        location: "California, United States",
        dedicated: "2005, August, 28",
        area: 17800,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/newport-beach-california-temple/newport-beach-california-temple-37127.jpg"
    },
    {
        templeName: "Sacramento California",
        location: "California, United States",
        dedicated: "2006, September, 3",
        area: 19500,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/sacramento-california-temple/sacramento-california-temple-5076-thumb.jpg"
    }
      ,
    {
        templeName: "Halifax Nova Scotia",
        location: "Dartmouth, Nova Scotia, Canada",
        dedicated: "1999, November, 14",
        area: 10700,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/halifax-nova-scotia-temple/halifax-nova-scotia-temple-13346-thumb.jpg"
    }
    ,
];
  
const figureGrid = document.querySelector('.figure-grid');

// Helper to clear grid
function clearTemples() {
    figureGrid.innerHTML = '';
}

// Helper to create and display temple cards
function displayTemples(templesArray) {
    clearTemples();
    templesArray.forEach(temple => {
        const figure = document.createElement('figure');
        const img = document.createElement('img');
        img.src = temple.imageUrl;
        img.alt = temple.templeName;
        img.loading = "lazy"; // native lazy loading

        const caption = document.createElement('figcaption');
        caption.innerHTML = `
        <h3>${temple.templeName}</h3>
        <p><strong>Location:</strong> ${temple.location}</p>
        <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
        <p><strong>Size:</strong> ${temple.area.toLocaleString()} sq ft</p>`;

        figure.appendChild(caption);
        figure.appendChild(img);
        

        figureGrid.appendChild(figure);
    });
}

// Initially show all
displayTemples(temples);

// Navigation filtering
const navLinks = document.querySelectorAll('.navigation a');
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const filter = link.textContent.toLowerCase();
        let filtered = temples;

        switch (filter) {
            case 'old':
                filtered = temples.filter(t => {
                    // Only years before 1900
                    const year = parseInt(t.dedicated.split(',')[0]);
                    return year < 1900;
                });
                break;
            case 'new':
                filtered = temples.filter(t => {
                    // Only years after 2000
                    const year = parseInt(t.dedicated.split(',')[0]);
                    return year > 2000;
                });
                break;
            case 'large':
                filtered = temples.filter(t => t.area > 90000);
                break;
            case 'small':
                filtered = temples.filter(t => t.area < 10000);
                break;
            case 'home':
            default:
                filtered = temples;
        }

        displayTemples(filtered);
    });
});
