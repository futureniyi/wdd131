
  


// relationship-test.js

// Likert options to add (without the default option)
const likertOptionsDemo = [
    { value: "7", label: "Strongly Agree" },
    { value: "6", label: "Agree Moderately" },
    { value: "5", label: "Agree a Little" },
    { value: "4", label: "Neither Agree nor Disagree" },
    { value: "3", label: "Disagree a Little" },
    { value: "2", label: "Disagree Moderately" },
    { value: "1", label: "Strongly Disagree" }
];

// Only add options if not already present (skip the first, which is the default)
for (let i = 1; i <= 7; i++) {
    const sel = document.getElementById('q' + i);
    if (sel) {
        // Only add the Likert options (default already exists in HTML)
        likertOptionsDemo.forEach(opt => {
            const option = document.createElement("option");
            option.value = opt.value;
            option.textContent = opt.label;
            sel.appendChild(option);
        });
    }
}

// localStorage: count number of successful submissions
function updateTestCount() {
    const count = parseInt(localStorage.getItem("relationshipTestCount") || 0, 10);
    const display = document.getElementById("test-count");
    if (display) {
        display.textContent = `You have completed this test ${count} time${count === 1 ? "" : "s"}.`;
    }
}

const form = document.getElementById("relationshipTestForm");
if (form) {
    updateTestCount();
    form.addEventListener("submit", function (e) {
        // Browser validation handles required
        let valid = true;
        for (let i = 1; i <= 7; i++) {
            const val = document.getElementById('q' + i).value;
            if (!val) {
                valid = false;
                break;
            }
        }
        if (!valid) {
            alert("Please answer all questions.");
            e.preventDefault();
            return;
        }
        // Increment count and store score in localStorage for score page if you wish
        let testCount = parseInt(localStorage.getItem("relationshipTestCount") || 0, 10) + 1;
        localStorage.setItem("relationshipTestCount", testCount);

        // Calculate score as per your system (for use on score page if you wish)
        let total = 0;
        for (let i = 1; i <= 7; i++) {
            total += parseInt(document.getElementById('q' + i).value, 10);
        }
        const percent = Math.round((total / 49) * 100);
        localStorage.setItem("relationshipTestScore", percent);
        // The form will still submit to the score page with the GET parameters!
    });
}
  