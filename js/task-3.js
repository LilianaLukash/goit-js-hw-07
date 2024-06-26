const inputElement = document.getElementById('name-input');
const outputElement = document.getElementById('name-output');

inputElement.addEventListener('input', function() {
    const trimmedInput = inputElement.value.trim();
    outputElement.textContent = trimmedInput ? trimmedInput : 'Anonymous';
})