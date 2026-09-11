// ===============================
// Registration Form
// ===============================

const form = document.getElementById("registrationForm");
const message = document.getElementById("message");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const year = document.getElementById("year").value;
    const selectedEvent = document.getElementById("event").value;

    if (
        name === "" ||
        email === "" ||
        year === "" ||
        selectedEvent === ""
    ) {
        message.textContent = "Please fill in all the fields.";
        return;
    }

    if (!email.endsWith("@vitbhopal.ac.in")) {
        message.textContent = "Please enter a valid VIT email.";
        return;
    }

    message.textContent = "Registration successful!";

    form.reset();

});


// ===============================
// Event Search
// ===============================

const searchInput = document.getElementById("eventSearch");
const categoryFilter = document.getElementById("categoryFilter");
const eventCards = document.querySelectorAll(".event-card");


function filterEvents() {

    const searchText = searchInput.value.toLowerCase();
    const selectedCategory = categoryFilter.value;

    eventCards.forEach(function(card) {

        const eventName = card
            .querySelector("h3")
            .textContent
            .toLowerCase();

        const category = card.dataset.category;

        const searchMatch = eventName.includes(searchText);

        const categoryMatch =
            selectedCategory === "all" ||
            category === selectedCategory;

        if (searchMatch && categoryMatch) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });

}


// Run search whenever user types

searchInput.addEventListener("input", filterEvents);


// Run filter whenever category changes

categoryFilter.addEventListener("change", filterEvents);