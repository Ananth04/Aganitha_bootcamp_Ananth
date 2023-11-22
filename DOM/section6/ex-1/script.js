const numberContainer = document.getElementById('numberContainer');

function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function createNumberGrid() {
  for (let i = 100; i <= 1000; i++) {
    const numberDiv = document.createElement('div');
    numberDiv.textContent = i;
    numberDiv.classList.add('number');

    if (i % 2 === 0) {
      numberDiv.style.backgroundColor = 'green'; // Even numbers
    } else {
      numberDiv.style.backgroundColor = 'yellow'; // Odd numbers
    }

    if (isPrime(i)) {
      numberDiv.style.backgroundColor = 'red'; // Prime numbers
    }

    numberContainer.appendChild(numberDiv);
  }
}

createNumberGrid();
