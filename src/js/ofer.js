document
  .getElementById('tour-form')
  .addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Форма успішно відправлена!');
  });

document.addEventListener('DOMContentLoaded', function () {
  const selectElement = document.getElementById('country');

  selectElement.addEventListener('change', function () {
    // Відновлюємо колір тексту для всіх опцій
    const options = this.querySelectorAll('option');
    options.forEach(option => {
      option.style.color = '#000';
      option.style.backgroundColor = '#fff';
    });

    // Отримуємо вибрану опцію
    const selectedOption = this.options[this.selectedIndex];

    // Зміна кольору тексту для вибраної опції
    if (selectedOption.value) {
      selectedOption.style.color = '#f0c040';
      selectedOption.style.backgroundColor = '#fff';
    }
  });
});
