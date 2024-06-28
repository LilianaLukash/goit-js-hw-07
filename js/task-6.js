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
    let allBoxes = [];
    let initialSize = 30;
    let size = 0
    let color = 0

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    size = `${initialSize + i * 10}px`;
    color = getRandomHexColor();
     
    allBoxes.push = `<div style="width: ${size}px; height: ${size}px; background-color: ${color};"></div>`

    
    }
    boxesContainer.innerHTML = allBoxes.join(' ');
}

function destroyBoxes() {
  const boxesContainer = document.getElementById('boxes');
  boxesContainer.innerHTML = ''; // Видаляємо всі квадрати
}

