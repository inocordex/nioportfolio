document.addEventListener("DOMContentLoaded", () => {
    // Variables
    const filterButtons = document.querySelectorAll(".filter-btn");
    const sections = document.querySelectorAll(".content-section");
  
    // Add click event listeners to each button
    filterButtons.forEach((button) => {
        button.addEventListener("click", () => {
            // Remove active state from all buttons
            filterButtons.forEach((btn) => btn.classList.remove("active"));
            // Add active state to the clicked button
            button.classList.add("active");

            // Get the target section ID from the button's data-target attribute
            const targetId = button.getAttribute("data-target");

            // Hide all sections
            sections.forEach((section) => {
                section.classList.remove("active");
            });

            // Show the target section
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.classList.add("active");
            }
        });
    });

    // Initialize by showing the first section
    if (filterButtons.length > 0 && sections.length > 0) {
        filterButtons[0].classList.add("active");
        sections[0].classList.add("active");
    }
});
