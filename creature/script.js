// Select all dropdown elements and the button
const dropdowns = document.querySelectorAll('.dropdown');
const button = document.getElementById('show-creature');

// Function to check if all dropdowns have a value selected
function checkDropdowns() {
    const allSelected = Array.from(dropdowns).every(dropdown => dropdown.value !== "");
    button.disabled = !allSelected;
}

// Function to save data in local storage and navigate
function saveData() {
    const data = {};
    dropdowns.forEach(dropdown => {
        data[dropdown.id] = dropdown.value; // Save only IDs and values
    });
    localStorage.setItem('creatureData', JSON.stringify(data));
    window.location.href = "view2.html";
}

// Add event listeners to dropdowns and button
dropdowns.forEach(dropdown => dropdown.addEventListener('change', checkDropdowns));
button.addEventListener('click', saveData);
