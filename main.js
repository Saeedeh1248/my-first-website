const apiUrl = 'https://jsonplaceholder.typicode.com/users';

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('users');
    data.forEach(user => {
      const userDiv = document.createElement('div');
      userDiv.className = 'user';

      userDiv.innerHTML = `
        <h3>${user.name}</h3>
        <p>ایمیل: ${user.email}</p>
        <p>تلفن: ${user.phone}</p>
        <p>آدرس: ${user.address.street}, ${user.address.city}</p>
        <button onclick="goToUser(${user.id})">Information</button>
      `;

      container.appendChild(userDiv);
    });
  })
  .catch(error => {
    document.getElementById('users').innerHTML = "مشکل در بارگذاری اطلاعات.";
    console.error('خطا در دریافت داده‌ها:', error);
  });

// تابع جاوااسکریپت برای هدایت به صفحه‌ی کاربر
function goToUser(id) {
  window.location.href = `/user/${id}`;
}