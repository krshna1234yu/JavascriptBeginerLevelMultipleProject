function validateForm(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Reset all error messages
    clearErrors();

    // Validate each input field
    let valid = true;

    // Validate name
    const nameInput = document.getElementById('name');
    const nameError = document.getElementById('name-error');
    if (nameInput.value.trim() === '') {
        nameError.textContent = 'Name is required';
        valid = false;
    }

    // Validate email
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('email-error');
    if (!isValidEmail(emailInput.value.trim())) {
        emailError.textContent = 'Invalid email format';
        valid = false;
    }

    // Validate phone number
    const phoneInput = document.getElementById('phone');
    const phoneError = document.getElementById('phone-error');
    if (!isValidPhone(phoneInput.value.trim())) {
        phoneError.textContent = 'Invalid phone number format';
        valid = false;
    }

    // Validate message
    const messageInput = document.getElementById('message');
    const messageError = document.getElementById('message-error');
    if (messageInput.value.trim() === '') {
        messageError.textContent = 'Message is required';
        valid = false;
    }

    // If form is valid, submit it (in this example, we'll just log the valid status)
    if (valid) {
        console.log('Form submitted successfully!');
    }
}

function clearErrors() {
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(msg => {
        msg.textContent = '';
    });
}

function isValidEmail(email) {
    // Basic email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPhone(phone) {
    // Basic phone number validation regex (10 digits without spaces or dashes)
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(phone);
}
