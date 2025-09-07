document.addEventListener("DOMContentLoaded", () => {
  // ===== Smooth Scrolling Functionality =====
  // Select all links that start with '#'
  const navLinks = document.querySelectorAll('a[href^="#"]');

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault(); // Prevent the default jump behavior

      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth", // This enables the smooth scroll
          block: "start",
        });
      }
    });
  });

  // ===== Modal Functionality =====
  const modalOverlay = document.getElementById("project-modal");
  const modalTitle = document.getElementById("modal-title");
  const modalDetails = document.getElementById("modal-details");
  const closeModalBtn = document.getElementById("close-modal");
  const learnMoreBtns = document.querySelectorAll(".learn-more-btn");

  // Open the modal when a "Learn More" button is clicked
  learnMoreBtns.forEach((button) => {
    button.addEventListener("click", () => {
      // Get the project info from the button's data attributes
      const title = button.getAttribute("data-title");
      const details = button.getAttribute("data-details");

      // Populate the modal with the project info
      modalTitle.textContent = title;
      modalDetails.textContent = details;

      // Display the modal with an animation
      modalOverlay.style.display = "flex";
      setTimeout(() => {
        // Use a timeout to allow the display change to register before adding the class
        modalOverlay.classList.add("active");
      }, 10);
    });
  });

  // Function to close the modal
  function closeModal() {
    modalOverlay.classList.remove("active");
    // Wait for the animation to finish before hiding the element
    setTimeout(() => {
      modalOverlay.style.display = "none";
    }, 400); // This duration should match your SCSS transition speed
  }

  // Close the modal when the 'x' button is clicked
  closeModalBtn.addEventListener("click", closeModal);

  // Close the modal when clicking on the overlay (outside the content)
  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) {
      closeModal();
    }
  });
});
