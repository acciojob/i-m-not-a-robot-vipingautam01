//your JS code here. If required.
const tiles = document.getElementsByClassName('tile');
const resetButton = document.getElementById('reset');
const verifyButton = document.getElementById('verify');
const messagePara = document.getElementById('para');

let selectedTiles = [];

// Function to shuffle the array randomly
function shuffle(array) {
  let currentIndex = array.length, temporaryValue, randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

// Function to reset the state to the initial state
function resetState() {
  selectedTiles = [];
  resetButton.style.display = 'none';
  verifyButton.style.display = 'none';
  messagePara.innerText = '';
}

// Function to handle tile selection
function selectTile(event) {
  const clickedTile = event.target;

  // Ignore selection if tile is already clicked or Verify button is shown
  if (selectedTiles.includes(clickedTile) || verifyButton.style.display === 'block') {
    return;
  }

  clickedTile.classList.add('selected');
  selectedTiles.push(clickedTile);

  // Show Reset button when at least one tile is selected
  if (selectedTiles.length >= 1) {
    resetButton.style.display = 'block';
  }

  // Show Verify button when two tiles are selected
  if (selectedTiles.length === 2) {
    verifyButton.style.display = 'block';
  }
}

// Function to verify the selected tiles
function verifyTiles() {
  const firstTileClass = selectedTiles[0].classList[0];
  const secondTileClass = selectedTiles[1].classList[0];

  // Hide Verify button
  verifyButton.style.display = 'none';

  if (firstTileClass === secondTileClass) {
    messagePara.innerText = 'You are a human. Congratulations!';
  } else {
    messagePara.innerText = "We can't verify you as a human. You selected the non-identical tiles.";
  }
}

// Generate an array of class names for the tiles
const classNames = ['img1', 'img2', 'img3',
