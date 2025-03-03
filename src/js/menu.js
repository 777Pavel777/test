document.addEventListener('DOMContentLoaded', function () {
  const menuItems = document.querySelectorAll('.header-menu > li');

  menuItems.forEach(item => {
    item.addEventListener('mouseover', function () {
      const dropdown = this.querySelector('.dropdown');
      if (dropdown) {
        dropdown.style.display = 'block';
      }
    });

    item.addEventListener('mouseout', function () {
      const dropdown = this.querySelector('.dropdown');
      if (dropdown) {
        dropdown.style.display = 'none';
      }
    });
  });
});
