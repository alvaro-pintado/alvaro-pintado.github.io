// Get the canvas element
const canvas = document.getElementById("animationCanvas");
const ctx = canvas.getContext("2d");

// Set canvas dimensions
canvas.width = 50;
canvas.height = 50;

// Animation loop
function animate() {
  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw the circle
  ctx.fillStyle = "blue";
  ctx.beginPath();
  ctx.arc(canvas.width / 2, canvas.height / 2, canvas.width / 2, 0, Math.PI * 2);
  ctx.fill();

  // Continue the animation
  requestAnimationFrame(animate);
}

// Start the animation
animate();

