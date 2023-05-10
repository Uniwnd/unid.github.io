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
    if ((i + j) % 2 === 0) {
      cell.className = "even";
    } else {
      cell.className = "odd";
    }
    piTable.appendChild(cell);
    index++;
  }
}

function updateTimer() {
  timer.innerHTML = timeLeft.toFixed(2);
   timeLeft -= 0.01;
      
  if (timeLeft <= 0) {
    input.disabled = true;
    return;
  }
      
  setTimeout(updateTimer, 10);
}

function updateDigits() {
  const value = input.value.slice(0, pi.length);
  let correctDigits = 0;

  let color_index = 0;

  for (let i = 0; i < value.length; i++) {
    if (value[i] === pi[i]) {
      correctDigits++;
    } else {
      digits.children[i].classList.add("red");
    }
    color_index++;
  }

  digits.innerHTML = `Score: ${correctDigits - 2}`;
}

input.addEventListener("input", updateDigits);

const intervalId = setTimeout(updateTimer, 10);

function goBack() {
  window.history.back();
}


