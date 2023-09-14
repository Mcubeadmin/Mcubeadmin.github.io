document.addEventListener("DOMContentLoaded", function () {
    const currentYearElement = document.getElementById("currentYear");
    const prevYearButton = document.getElementById("prevYear");
    const nextYearButton = document.getElementById("nextYear");

    // Initial year (change as needed)
    let currentYear = 2023;

    // Function to update the displayed year
    function updateYear() {
        currentYearElement.textContent = currentYear;
        // Fetch and display publications for the current year via AJAX or other methods
    }

    // Initial update
    updateYear();

    // Event listener for the "Previous Year" button
    prevYearButton.addEventListener("click", function () {
        currentYear--;
        updateYear();
    });

    // Event listener for the "Next Year" button
    nextYearButton.addEventListener("click", function () {
        currentYear++;
        updateYear();
    });
});
