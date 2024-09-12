// script.js
/* 
// Load saved email if "Remember Me" was checked
window.onload = function() {
    const savedEmail = localStorage.getItem('rememberedEmail');
    if (savedEmail) {
        document.getElementById('email').value = savedEmail;
        document.getElementById('rememberMe').checked = true;
    }
};

document.getElementById('loginForm').addEventListener('submit', async function (e) {
    e.preventDefault();  // Prevent form submission

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const rememberMe = document.getElementById('rememberMe').checked;
    const errorMessage = document.getElementById('errorMessage');
    
    errorMessage.textContent = '';  // Clear previous errors
    
    // Basic client-side validation
    if (!validateEmail(email)) {
        errorMessage.textContent = 'Please enter a valid email.';
        return;
    }
    
    if (password.length < 6) {
        errorMessage.textContent = 'Password must be at least 6 characters.';
        return;
    }

    // Remember Me functionality
    if (rememberMe) {
        localStorage.setItem('rememberedEmail', email);
    } else {
        localStorage.removeItem('rememberedEmail');
    }

    // Call API
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: email,
                password: password,
            }),
        });
        
        if (response.ok) {
            errorMessage.style.color = 'green';
            errorMessage.textContent = 'Login successful!';
        } else {
            errorMessage.textContent = 'Login failed. Please try again.';
        }
    } catch (error) {
        errorMessage.textContent = 'An error occurred. Please try again later.';
    }
});

// Validate email using a regular expression
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
 */

// script.js

document.getElementById('loginForm').addEventListener('submit', async function (e) {
    e.preventDefault();  // Prevent default form submission

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const rememberMe = document.getElementById('rememberMe').checked;
    const errorMessage = document.getElementById('errorMessage');
    
    // Clear previous messages
    errorMessage.textContent = '';  
    
    // Basic client-side validation
    if (!validateEmail(email)) {
        errorMessage.textContent = 'Please enter a valid email.';
        return;
    }
    
    if (password.length < 6) {
        errorMessage.textContent = 'Password must be at least 6 characters.';
        return;
    }

    // Remember Me functionality
    if (rememberMe) {
        localStorage.setItem('rememberedEmail', email);
    } else {
        localStorage.removeItem('rememberedEmail');
    }

    // Display loading message
    errorMessage.textContent = 'Logging in...';
    
    // Call the API
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: email,
                password: password,
            }),
        });

        // Check if the response is ok (status 200-299)
        if (response.ok) {
            const result = await response.json(); // Parse JSON from the response
            errorMessage.style.color = 'green';
            errorMessage.textContent = 'Login successful! Welcome!';
            console.log('Success:', result);
        } else {
            // If response is not successful, display error
            errorMessage.style.color = 'red';
            errorMessage.textContent = 'Login failed. Please check your credentials and try again.';
        }
    } catch (error) {
        // Handle network errors or other issues
        errorMessage.style.color = 'red';
        errorMessage.textContent = 'An error occurred. Please try again later.';
        console.error('Error:', error);
    }
});

// Validate email using a regular expression
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
