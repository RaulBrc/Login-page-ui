function showpassword() {
    const password = document.getElementById("password");
    const icon = document.getElementById("icon");

    if (password.type === "password") {
        password.type = "text";
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");
    } else {
        password.type = "password";
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye");
    }
}

function LoginValidation() {
    const username = document.getElementById("username");
    const password = document.getElementById("password");
    const error = document.getElementById("error");

    
    username.classList.remove("error");
    password.classList.remove("error");
    error.textContent = "";

    
    if (username.value === "" || password.value === "") {
        error.textContent = "Please fill in all fields.";

        username.classList.add("error");
        password.classList.add("error");

        return;
    }

   
    if (password.value.length < 4) {
        error.textContent = "Password must be at least 4 characters long.";
        password.classList.add("error");

        return;
    }


    error.textContent = "Login successful!";
    error.classList.add("success-message");
    error.classList.remove("error-message");
}

const username = document.getElementById("username");
const password = document.getElementById("password");
const error = document.getElementById("error");

username.addEventListener("input", limparErro);
password.addEventListener("input", limparErro);

function limparErro() {
    username.classList.remove("error");
    password.classList.remove("error");
    error.textContent = "";
}