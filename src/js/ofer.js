document
  .getElementById('tour-form')
  .addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Форма успішно відправлена!');
  });

document.addEventListener('DOMContentLoaded', function () {
  const selectElement = document.getElementById('country');

  selectElement.addEventListener('change', function () {
    const options = this.querySelectorAll('option');
    options.forEach(option => {
      option.style.color = '#000';
      option.style.backgroundColor = '#fff';
    });

    const selectedOption = this.options[this.selectedIndex];

    if (selectedOption.value) {
      selectedOption.style.color = '#f0c040';
      selectedOption.style.backgroundColor = '#fff';
    }
  });
});

document
  .getElementById('scroll-button')
  .addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('data-target').slice(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const yOffset = 0;
      const y =
        targetElement.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  });
