
  const loginForm = document.querySelector('.login-form');

  loginForm.addEventListener('submit', function(event) {
    event.preventDefault();  // Запобігає перезавантаженню сторінки

    const emailInput = loginForm.elements.email;
    const passwordInput = loginForm.elements.password;

    // Перевірка чи поля не порожні
    if (!emailInput.value.trim() || !passwordInput.value.trim()) {
      alert('All form fields must be filled in');
      return;  // Зупиняємо подальше виконання якщо поля порожні
    }

    // Створення об'єкту з даними форми
    const formData = {
      email: emailInput.value.trim(),
      password: passwordInput.value.trim()
    };

    console.log(formData);  // Вивід даних форми в консоль

    loginForm.reset();  // Очищення форми після відправки
  });

