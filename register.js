document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting the traditional way

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Basic validation (you can add more checks here)
    if (username === '' || email === '' || password === '') {
        alert('Please fill in all fields.');
        return;
    }

    // Simulate registration (in a real app, you would send the data to a server)
    alert('Registration successful!');

    // Redirect to the login page after registration
    window.location.href = 'login.html';
});
