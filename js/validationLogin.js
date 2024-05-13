document.addEventListener('DOMContentLoaded', function() 
{
    const form = document.getElementById('loginForm');
    const passwordInput = document.getElementById('password');

    form.addEventListener('submit', function(event) {
      event.preventDefault();

      const password = passwordInput.value;

      if (validatePassword(password)) {
        // If password is valid, submit the form
        form.submit();
      } else {
        alert('Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number.');
      }
    });

    function validatePassword(password) {
      const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
      return regex.test(password);
    }
  });