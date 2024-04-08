document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const username = form.elements.username.value;
        const password = form.elements.password.value;

        // Check if username and password are correct
        if (username === "anuj" && password === "dhasmana") {
            window.location.href = "home.html";
        } else {
            alert("Invalid username or password. Please try again.");
        }
    });
});