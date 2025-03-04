class User {
  constructor(name, email, phone, country) {
    this.setName(name);
    this.setEmail(email);
    this.setPhone(phone);
    this.setCountry(country);
  }

  setName(name) {
    if (typeof name !== 'string' || name.trim().length < 2) {
      throw new Error("Ім'я має бути рядком довжиною щонайменше 2 символи");
    }
    this.name = name.trim();
  }

  setEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      throw new Error('Неправильний формат email');
    }
    this.email = email;
  }

  setPhone(phone) {
    const phoneRegex = /^\+?\d{10,12}$/;
    if (!phoneRegex.test(phone)) {
      throw new Error('Номер телефону має бути у форматі 10-12 цифр');
    }
    this.phone = phone;
  }

  setCountry(country) {
    const validCountries = ['turkey', 'egypt', 'sri-lanka', 'dominican'];
    if (!country || !validCountries.includes(country)) {
      throw new Error('Виберіть країну зі списку');
    }
    this.country = country;
  }

  getUserData() {
    return {
      name: this.name,
      email: this.email,
      phone: this.phone,
      country: this.country,
    };
  }
}

const SERVER_URL = 'https://user-server-backend-99yi.onrender.com';

// Завантаження та відображення користувачів
async function fetchUsers() {
  try {
    const response = await fetch(SERVER_URL);
    if (!response.ok) throw new Error('Не вдалося отримати користувачів');
    const users = await response.json();
    const userList = document.getElementById('userList');
    userList.innerHTML = '';
    users.forEach(user => {
      const li = document.createElement('li');
      li.textContent = `${user.name} (${user.email}, ${user.phone}, ${user.country})`;
      userList.appendChild(li);
    });
  } catch (error) {
    console.error('Помилка:', error);
  }
}

// Обробка форми
document
  .getElementById('tour-form')
  .addEventListener('submit', async function (event) {
    event.preventDefault();

    try {
      const user = new User(
        document.getElementById('name').value,
        document.getElementById('email').value,
        document.getElementById('phone').value,
        document.getElementById('country').value
      );

      const response = await fetch(SERVER_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user.getUserData()),
      });

      if (!response.ok) throw new Error('Помилка сервера');
      const data = await response.json();
      console.log('Успіх:', data);
      alert('Форма успішно відправлена!');
      this.reset();
      fetchUsers(); // Оновлюємо список
    } catch (error) {
      console.error('Помилка:', error);
      alert('Помилка при відправці: ' + error.message);
    }
  });

// Стилізація select
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

  fetchUsers(); // Завантажуємо користувачів при старті
});

// Прокрутка до списку
document
  .getElementById('scroll-button')
  ?.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('data-target')?.slice(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const yOffset = 0;
      const y =
        targetElement.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  });
