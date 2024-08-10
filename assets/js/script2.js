// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Get the button, overlay, and form elements by their IDs
    const showFormButton = document.getElementById('showFormButton');
    const overlay = document.getElementById('registrationFormContainerOverlay');
    const closeButton = document.getElementById('closeButton');

    // Show the modal (overlay + form)
    showFormButton.addEventListener('click', () => {
        overlay.style.display = 'flex';
    });

    // Hide the modal (overlay + form)
    closeButton.addEventListener('click', () => {
        overlay.style.display = 'none';
    });

    // Optional: Hide the modal when clicking outside the form
    overlay.addEventListener('click', (event) => {
        if (event.target === overlay) {
            overlay.style.display = 'none';
        }
    });
});








    const registrationForm = document.getElementById('registrationForm');

    // Form validation
    registrationForm.addEventListener('submit', (event) => {
        let isValid = true;
        // Clear previous errors
        document.querySelectorAll('.error-message').forEach(el => el.textContent = '');

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        if (name === '') {
            document.getElementById('nameError').textContent = 'Name is required';
            isValid = false;
        }

        if (email === '') {
            document.getElementById('emailError').textContent = 'Email is required';
            isValid = false;
        } else if (!validateEmail(email)) {
            document.getElementById('emailError').textContent = 'Invalid email address';
            isValid = false;
        }

        if (phone === '') {
            document.getElementById('phoneError').textContent = 'Phone number is required';
            isValid = false;
        }

        if (password === '') {
            document.getElementById('passwordError').textContent = 'Password is required';
            isValid = false;
        }

        if (confirmPassword === '') {
            document.getElementById('confirmPasswordError').textContent = 'Confirm password is required';
            isValid = false;
        } else if (password !== confirmPassword) {
            document.getElementById('confirmPasswordError').textContent = 'Passwords do not match';
            isValid = false;
        }

        if (!isValid) {
            event.preventDefault();
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }



document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Clear previous errors
    clearErrors();

    // Get input values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    let isValid = true;

    // Validate name
    if (name.length < 5) {
        showError('nameError', 'Name must be at least 5 characters long.');
        isValid = false;
    }

    // Validate email
    if (!email.includes('@')) {
        showError('emailError', 'Enter a valid email address.');
        isValid = false;
    }

    // Validate phone number
    if (phone.length !== 10 || phone === '1234567890' || isNaN(phone)) {
        showError('phoneError', 'Phone number must be a 10-digit number and cannot be 1234567890.');
        isValid = false;
    }

    // Validate password
    if (password.length < 8 || password.toLowerCase() === 'password' || password.toLowerCase() === name.toLowerCase()) {
        showError('passwordError', 'Password must be at least 8 characters long and cannot be "password" or your name.');
        isValid = false;
    }

    // Validate confirm password
    if (password !== confirmPassword) {
        showError('confirmPasswordError', 'Passwords do not match.');
        isValid = false;
    }

    if (isValid) {
        alert('Form submitted successfully!');
        // You can submit the form here if needed
        // this.submit();
    }
});

function clearErrors() {
    document.querySelectorAll('.error-message').forEach(el => el.textContent = '');
}

function showError(id, message) {
    document.getElementById(id).textContent = message;
}