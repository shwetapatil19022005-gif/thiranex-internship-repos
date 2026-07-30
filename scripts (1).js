document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("homePage").style.display = "none";
});

function showHomePage() {
    document.getElementById("homePage").style.display = "block";
    document.getElementById("loginContainer").style.display = "none";
}

function goToHomePage() {
    document.getElementById("searchBar").value = ""; // Clear search bar on home button click
    searchBusinesses(); // Reset search filter
}

// Function to filter businesses based on search query
function searchBusinesses() {
    const query = document.getElementById("searchBar").value.toLowerCase();
    const businessCards = document.querySelectorAll(".business-card");

    businessCards.forEach(card => {
        const name = card.querySelector("h2").textContent.toLowerCase();
        card.style.display = name.includes(query) ? "block" : "none";
    });
}

function validateForm() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const role = document.getElementById("role").value;
    const usernameError = document.getElementById("usernameError");
    const usernameRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$/;

    // Validate username
    if (!usernameRegex.test(username)) {
        usernameError.style.display = "block";
        return false;
    } else {
        usernameError.style.display = "none";
    }

    // Validate password presence
    if (!password) {
        alert("Please enter your password.");
        return false;
    }

    // Validate role selection
    if (!role) {
        alert("Please select a role.");
        return false;
    }

    // If all validations pass, show the home page
    showHomePage();
    return true;
}
// Sample data for additional information
const businessDetails = {
    "Cafe La'sCita & Resto": {
        images: ["la cita.jfif", "la cita1.jfif", "la cita_menu1.jpg"],
        menu: ["Cappuccino", "Espresso", "Sandwich", "Pasta", "Pizza"],
        contact: "9172135279",
        address: "Shop No.01, Rk Nagar Road, Kolhapur - 416013"
    },
    "Jaswant Sweets": {
        images: ["jaswant1.jfif", "jaswant4.jpg", "jaswant_menu.jpg"],
        menu: ["Gulab Jamun", "Rasgulla", "Barfi", "Peda", "Lassi"],
        contact: "7947109013",
        address: "Ujalaiwadi, Kolhapur"
    },
    // Add similar entries for other businesses
};

// Function to open modal and display business details
function openModal(businessName) {
    const modal = document.getElementById("businessModal");
    const title = document.getElementById("modalTitle");
    const imagesContainer = document.getElementById("modalImages");
    const menuList = document.getElementById("menuList");
    const contact = document.getElementById("modalContact");
    const address = document.getElementById("modalAddress");

    const details = businessDetails[businessName];

    title.textContent = businessName;
    imagesContainer.innerHTML = details.images.map(img => `<img src="${img}" alt="${businessName}">`).join('');
    menuList.innerHTML = details.menu.map(item => `<li>${item}</li>`).join('');
    contact.textContent = `Contact: ${details.contact}`;
    address.textContent = `Address: ${details.address}`;

    modal.style.display = "block";
}

// Function to close the modal
function closeModal() {
    document.getElementById("businessModal").style.display = "none";
}

// Event listener for each business card
document.querySelectorAll(".business-card").forEach(card => {
    card.addEventListener("click", () => {
        const businessName = card.querySelector("h2").textContent;
        openModal(businessName);
    });
});
