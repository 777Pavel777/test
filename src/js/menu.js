// document.addEventListener('DOMContentLoaded', function () {
//   const menuItems = document.querySelectorAll('.header-menu > li');

//   menuItems.forEach(item => {
//     item.addEventListener('click', function (event) {
//       event.preventDefault();

//       const dropdown = this.querySelector('.dropdown');
//       if (dropdown) {
//         dropdown.style.display =
//           dropdown.style.display === 'block' ? 'none' : 'block';
//       }
//     });

//     document.addEventListener('click', function (event) {
//       if (!item.contains(event.target)) {
//         const dropdown = item.querySelector('.dropdown');
//         if (dropdown) {
//           dropdown.style.display = 'none';
//         }
//       }
//     });
//   });
// });

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
