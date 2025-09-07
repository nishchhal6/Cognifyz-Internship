const changeColorBtn = document.querySelector(".click-me-btn");

// List of beautiful gradients
const gradients = [
  "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", // Default Purple/Blue
  "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)", // Pink/Peach
  "linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)", // Green/Blue
  "linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)", // Pink/Light Blue
  "linear-gradient(135deg, #ffdde1 0%, #ee9ca7 100%)", // Soft Pink
];

let currentGradientIndex = 0;

changeColorBtn.addEventListener("click", () => {
  // Get the next gradient in the list
  currentGradientIndex = (currentGradientIndex + 1) % gradients.length;

  // Change the body's background to the new gradient
  document.body.style.background = gradients[currentGradientIndex];
});
