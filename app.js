// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const sections = document.querySelectorAll('.content-section');

  // Add click event to each filter button
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Hide all sections
      sections.forEach(section => {
        section.classList.remove('active');
      });

      // Remove active class from all buttons
      filterButtons.forEach(btn => {
        btn.classList.remove('active');
      });

      // Show the selected section and add active class to the button
      const targetSection = document.getElementById(button.getAttribute('data-target'));
      targetSection.classList.add('active');
      button.classList.add('active');
    });
  });

  // Optional: Add functionality to toggle the mobile filter dropdown
  const filterToggleButton = document.querySelector('.filter-btn-toggle');
  const filterContainer = document.querySelector('.filter-btn-container');

  filterToggleButton.addEventListener('click', () => {
    filterContainer.classList.toggle('active');
  });
});
      
