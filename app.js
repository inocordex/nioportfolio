document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded and parsed");

  const filterButtons = document.querySelectorAll('.filter-btn');
  const sections = document.querySelectorAll('.content-section');
  const filterToggleButton = document.querySelector('.filter-btn-toggle');
  const filterContainer = document.querySelector('.filter-btn-container');

  // Function to handle button clicks
  const handleButtonClick = (button) => {
    // Remove 'active' class from all buttons and sections
    document.querySelectorAll('.active').forEach(el => el.classList.remove('active'));

    // Add 'active' class to the clicked button
    button.classList.add('active');

    // Find the target section and activate it
    const targetSection = document.getElementById(button.dataset.target);
    if (targetSection) {
      targetSection.classList.add('active');
    } else {
      console.error(`No section found for target: ${button.dataset.target}`);
    }
  };

  // Attach click events to each filter button
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      handleButtonClick(button);
    });
  });

  // Toggle the filter dropdown for mobile devices
  if (filterToggleButton && filterContainer) {
    filterToggleButton.addEventListener('click', () => {
      console.log("Filter toggle button clicked");
      const isActive = filterContainer.classList.toggle('active');
      
      // Accessibility: Update ARIA attributes
      filterToggleButton.setAttribute('aria-expanded', isActive);
    });

    // Accessibility: Set initial ARIA attributes
    filterToggleButton.setAttribute('aria-expanded', 'false');
  } else {
    console.error("Filter toggle button or container not found");
  }

  // Fallback if no buttons or sections exist
  if (!filterButtons.length || !sections.length) {
    console.warn("No filter buttons or content sections found. Please check your HTML structure.");
  }
});
