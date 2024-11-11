function toggleForm() {
    const loginForm = document.getElementById("login-form");
    const signupForm = document.getElementById("signup-form");
    const formTitle = document.getElementById("form-title");

    if (loginForm.classList.contains("hidden")) {
        loginForm.classList.remove("hidden");
        signupForm.classList.add("hidden");
        formTitle.textContent = "Login to HealthConnect";
    } else {
        loginForm.classList.add("hidden");
        signupForm.classList.remove("hidden");
        formTitle.textContent = "Sign Up for HealthConnect";
    }
}

function login(event) {
    event.preventDefault();
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    // Dummy authentication (replace with real API call)
    if (email === "user@example.com" && password === "password") {
        alert("Login successful!");

        // Set a dummy name for demonstration; replace with a real user name from backend
        localStorage.setItem("username", "John Doe");  

        window.location.href = "dashboard.html";  // Redirect to dashboard page
    } else {
        alert("Invalid email or password");
    }
}

function signup(event) {
    event.preventDefault();
    const name = document.getElementById("signup-name").value;
    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;

    // Save the user name in localStorage
    localStorage.setItem("username", name);  

    alert(`Sign up successful! Welcome, ${name}`);
    window.location.href = "dashboard.html";  // Redirect to dashboard page
}
