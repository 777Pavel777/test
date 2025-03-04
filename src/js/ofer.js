import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://jtlcmpfxrjgonsyhvagw.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp0bGNtcGZ4cmpnb25zeWh2YWd3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDExMTI1NDIsImV4cCI6MjA1NjY4ODU0Mn0.5AU0rdSg-Hunh9U20hNx7iKm42FWNFakuXy44srNcPA';
const supabase = createClient(supabaseUrl, supabaseKey);

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

// Завантаження та відображення користувачів
async function fetchUsers() {
  try {
    const { data, error } = await supabase.from('users').select('*');
    if (error) throw error;

    const userList = document.getElementById('userList');
    userList.innerHTML = '';
    data.forEach(user => {
      const li = document.createElement('li');
      li.textContent = `${user.name} (${user.email}, ${user.phone}, ${user.country})`;
      userList.appendChild(li);
    });
  } catch (error) {
    console.error('Помилка:', error);
  }
}

// Обробка форми
document.getElementById('tour-form').addEventListener('submit', async function (event) {
  event.preventDefault();

  try {
    const user = new User(
      document.getElementById('name').value,
      document.getElementById('email').value,
      document.getElementById('phone').value,
      document.getElementById('country').value
    );

    const { data, error } = await supabase
      .from('users')
      .insert([user.getUserData()])
      .select();

    if (error) throw error;

    console.log('Успіх:', data);
    alert('Форма успішно відправлена!');
    this.reset();
    fetchUsers(); // Оновлюємо список
  } catch (error) {
    console.error('Помилка:', error);
    alert('Помилка при відправці: ' + error.message);
  }
});

// Стилізація select і прокрутка залишаються без змін
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

document.getElementById('scroll-button')?.addEventListener('click', function (e) {
  e.preventDefault();
  const targetId = this.getAttribute('data-target')?.slice(1);
  const targetElement = document.getElementById(targetId);
  if (targetElement) {
    const yOffset = 0;
    const y = targetElement.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
});
