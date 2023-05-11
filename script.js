const pi = Math.PI.toFixed(54);
const digits = document.getElementById("digits");
const input = document.getElementById("input");
const timer = document.getElementById("timer");

const $input = document.getElementById('input'); 
$input.value = "3.";  
let timeLeft = 3.14;

const piTable = document.getElementById("pi-table");
const piDigits = "3.141592653589793238462643383279502884197169399375105820974944592307816406286";
let index = 0;

for (let i = 0; i < 8; i++) {
  for (let j = 0; j < 8; j++) {
    const cell = document.createElement("div");
    cell.innerText = piDigits[index];
    piTable.appendChild(cell);
    index++;
  }
}

let startTime = null; 
let intervalId = null;

const piCells = Array.from(piTable.querySelectorAll("div"));

function updateDigits() {
  const value = input.value.slice(0, pi.length);
  let correctDigits = 0;

  for (let i = 0; i < value.length; i++) {
    if (value[i] === piDigits[i]) {
      correctDigits++;
      piCells[i].style.color = "white";
    } else {
      piCells[i].style.color = "red";
    }
  }

  digits.innerHTML = `Score: ${correctDigits - 2}`;

  if (correctDigits > 2 && startTime === null) {
    startTime = Date.now();
    intervalId = setInterval(updateTimer, 1);
  }
}


function updateTimer() {
  const elapsedTime = (Date.now() - startTime) / 1000;
  timeLeft = 3.14 - elapsedTime; 

  if (timeLeft <= 0) { 
    timeLeft = 0;
    input.disabled = true;
    clearTimeout(intervalId);
  } else {
    timer.innerHTML = timeLeft.toFixed(2).padStart(4, '0');
    intervalId = setInterval(updateTimer, 1);
  }
}

timer.innerHTML = "3.14";
input.addEventListener("input", updateDigits);
