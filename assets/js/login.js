const userIcon = document.getElementById('userheader');

// Lấy modal và nút đóng
const loginModal = document.getElementById('login-modal');
const closeBtn = document.querySelector('.close');

// Khi người dùng nhấp vào biểu tượng người dùng
userIcon.addEventListener('click', function() {
    // Hiển thị modal
    loginModal.style.display = 'block';
});

// Khi người dùng nhấp vào nút đóng
closeBtn.addEventListener('click', function() {
    // Ẩn modal
    loginModal.style.display = 'none';
});