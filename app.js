document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded and parsed");

  const filterButtons = document.querySelectorAll('.filter-btn');
  const sections = document.querySelectorAll('.content-section');
  const filterToggleButton = document.querySelector('.filter-btn-toggle');
  const filterContainer = document.querySelector('.filter-btn-container');

  console.log(filterButtons); // Check if buttons are selected
  console.log(sections); // Check if sections are selected

  // Add click event to each filter button
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      console.log(`Clicked on button: ${button.textContent}`);

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
      if (targetSection) {
        targetSection.classList.add('active');
      } else {
        console.error(`No section found for target: ${button.getAttribute('data-target')}`);
      }
      button.classList.add('active');
    });
  });

  // Toggle filter dropdown
  if (filterToggleButton && filterContainer) {
    filterToggleButton.addEventListener('click', () => {
      console.log("Filter toggle button clicked");
      filterContainer.classList.toggle('active');
    });
  } else {
    console.error("Filter toggle button or container not found");
  }
});
                          
