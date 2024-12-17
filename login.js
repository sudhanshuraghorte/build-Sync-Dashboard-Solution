document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting the traditional way

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Basic validation (you can add more checks here)
    if (username === '' || password === '') {
        alert('Please fill in all fields.');
        return;
    }

    // Simulate login (in a real app, you would send the data to a server)
    alert('Login successful!');

    // Redirect to the dashboard (or another page)
    window.location.href = 'index.html';
});
