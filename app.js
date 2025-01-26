filterToggleButton.addEventListener('click', toggleDropdown);
filterToggleButton.addEventListener('touchstart', toggleDropdown);

function toggleDropdown(event) {
  event.preventDefault(); // Prevent default behavior
  console.log("Filter toggle button clicked");
  const isActive = filterContainer.classList.toggle('active');
  filterToggleButton.setAttribute('aria-expanded', isActive);
}
