document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.Form');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirm-password');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const password = passwordInput.value;
      const confirmPassword = confirmPasswordInput.value;
  
      if (validatePassword(password, confirmPassword)) {
        // If passwords match and meet the criteria, submit the form
        form.submit();
      } else {
        alert('Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number. Make sure the passwords match.');
      }
    });
  
    function validatePassword(password, confirmPassword) {
      const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
      return regex.test(password) && password === confirmPassword;
    }
  });
  