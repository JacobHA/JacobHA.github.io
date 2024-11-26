const canvas = document.getElementById('cartpole');
const ctx = canvas.getContext('2d');

// Game constants
const cartWidth = 80;
const cartHeight = 20;
const poleWidth = 10;
const ANGLE_THRESHOLD_TERMINATE = 2 * 12 * 2 * Math.PI / 360
const visualPoleLength = 150;

// Update physics
const forceMag = 10.0; // Magnitude of force applied
const gravity = 9.8; // Gravity constant
const massCart = 1.0; // Mass of the cart
const massPole = 0.1; // Mass of the pole
const totalMass = massCart + massPole; // Total mass
const poleLength = 40.0; // Half-length of the pole
const tau = 0.02; // Time step (seconds)
const poleMassLength = massPole * poleLength;

// Game state
let score = 0;
let highScore = 0;
let displayedScore = 0;
let cartX = canvas.width / 2 - cartWidth / 2;
let cartSpeed = 0;
// Choose a random number in the range -0.05 to 0.05 for initial angle:
let poleAngle = (Math.random() * 0.1 - 0.05)/5;
let poleAngularVelocity = 0;
let currentAction = 0; // 0 for left, 1 for right

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') {
        currentAction = 0; // Left arrow key
    } else if (event.key === 'ArrowRight') {
        currentAction = 1; // Right arrow key
    }
});

canvas.addEventListener('click', (event) => {
    const rect = canvas.getBoundingClientRect();
    const clickX = event.clientX - rect.left;

    currentAction = clickX < canvas.width / 2 ? 0 : 1; // 0 for left, 1 for right
});
function updatePhysics() {
    score += 0.2; // Increment score
    // round the score to the nearest integer
    displayedScore = Math.floor(score);
    // check if new high score:
    if (displayedScore > highScore) {
        highScore = displayedScore;
    }

    // Force applied based on currentAction
    const force = currentAction === 1 ? forceMag : -forceMag;
    const costheta = Math.cos(poleAngle);
    const sintheta = Math.sin(poleAngle);

    // Intermediate calculations
    const temp = (force + poleMassLength * poleAngularVelocity ** 2 * sintheta) / totalMass;
    const thetaAcc = (gravity * sintheta - costheta * temp) /
        (poleLength * (4.0 / 3.0 - massPole * costheta ** 2 / totalMass));
    const xAcc = temp - (poleMassLength * thetaAcc * costheta) / totalMass;

    // Update state variables
    cartX += tau * cartSpeed * 6;
    cartSpeed += tau * xAcc;
    poleAngle += tau * poleAngularVelocity;
    poleAngularVelocity += tau * thetaAcc;

    // Reset if the pole falls or the cart goes out of bounds
    if (Math.abs(poleAngle) > ANGLE_THRESHOLD_TERMINATE || cartX < 0 || cartX + cartWidth > canvas.width) {
        resetGame();
    }
}


// Reset game
function resetGame() {
    cartX = canvas.width / 2 - cartWidth / 2; // Reset in center
    cartSpeed = 0;
    poleAngle = (Math.random() * 0.1 - 0.05)/5;
    poleAngularVelocity = 0;
    score = 0;
}

// Drawing the game
function drawGame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw score
    ctx.fillStyle = 'red'; // Red text
    ctx.font = '30px Arial'; // Large font size
    ctx.fillText(`Score: ${displayedScore}`, 10, 40); // Draw text at x=10, y=40

    // Draw high score in right corner:
    ctx.fillText(`High Score: ${highScore}`, canvas.width - 250, 40);


    // Draw cart
    ctx.fillStyle = '#000';
    
    visualCartX = cartX;//2*(cartX - 2*cartWidth);
    ctx.fillRect(visualCartX, canvas.height - 50, cartWidth, cartHeight);

    // Draw pole
    const poleX = visualCartX + cartWidth / 2;
    const poleY = canvas.height - 50;
    const poleEndX = poleX + visualPoleLength * Math.sin(poleAngle);
    const poleEndY = poleY - visualPoleLength * Math.cos(poleAngle);

    ctx.strokeStyle = '#f00';
    ctx.lineWidth = poleWidth;
    ctx.beginPath();
    ctx.moveTo(poleX, poleY);
    ctx.lineTo(poleEndX, poleEndY);
    ctx.stroke();

    // Draw the ground:
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(0, canvas.height - 30);
    ctx.lineTo(canvas.width, canvas.height - 30);
    ctx.stroke();

}

// Game loop
function gameLoop() {
    updatePhysics();
    drawGame();
    requestAnimationFrame(gameLoop);
}

// Start the game
gameLoop();
