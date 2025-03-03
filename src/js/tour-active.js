document.querySelectorAll('.tours-header span').forEach(span => {
  span.addEventListener('click', function () {
    document.querySelector('.tours-header .active').classList.remove('active');
    this.classList.add('active');
  });
});
