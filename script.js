function generatePassword() {
    let uppercase = document.getElementById("uppercase").checked;
    let lowercase = document.getElementById("lowercase").checked;
    let numbers = document.getElementById("numbers").checked;
    let symbols = document.getElementById("symbols").checked;
    let length = document.getElementById("length").value;

    let chars = "";

    if (uppercase) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (lowercase) chars += "abcdefghijklmnopqrstuvwxyz";
    if (numbers) chars += "0123456789";
    if (symbols) chars += "!@#$%^&*()_+";

    if (chars === "") {
        alert("Select at least one option!");
        return;
    }

    let password = "";
    for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * chars.length);
        password += chars[randomIndex];
    }

    document.getElementById("password").value = password;
}

function copyPassword() {
    let passwordField = document.getElementById("password");

    if (passwordField.value === "") {
        alert("No password to copy!");
        return;
    }

    passwordField.select();
    document.execCommand("copy");

    alert("Password copied!");
}
