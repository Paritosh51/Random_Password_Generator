const buttons = document.querySelectorAll("button");
const copyButton = document.getElementById("copy");
const input = document.querySelector("input");

let passwordCopy = ''; // Declare passwordCopy outside

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const data = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz~!@#$%^&*()_+[]{}|;:,.<>?';
        let randomString = '';
        for (let i = 0; i < 8; i++) {
            const randomIndex = Math.floor(Math.random() * data.length);
            randomString += data[randomIndex];
        }
        input.value = randomString;
        passwordCopy = input.value.trim(); // Update passwordCopy here
    });
});

copyButton.addEventListener("click", () => {
    if (input.value === '') {
        alert("Please generate a password first.........");
        return;
    }
    navigator.clipboard.writeText(passwordCopy).then(() => {
        alert("Password copied to clipboard!");
    });
});