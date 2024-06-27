function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

  const input = document.querySelector('#num-input');
  const createButton = document.querySelector('[data-create]');
  const destroyButton = document.querySelector('[data-destroy]');

  createButton.addEventListener('click', function() {
    const numBoxes = parseInt(input.value);
    if (numBoxes >= 1 && numBoxes <= 100) {
      createBoxes(numBoxes);
    }
    input.value = '';
  });

  destroyButton.addEventListener('click', destroyBoxes);


function createBoxes(amount) {
  destroyBoxes(); // Очищаємо попередні квадрати перед створенням нових
  const boxesContainer = document.getElementById('boxes');
  let initialSize = 30;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${initialSize + i * 10}px`;
    box.style.height = `${initialSize + i * 10}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesContainer.appendChild(box);
  }
}

function destroyBoxes() {
  const boxesContainer = document.getElementById('boxes');
  boxesContainer.innerHTML = ''; // Видаляємо всі квадрати
}

