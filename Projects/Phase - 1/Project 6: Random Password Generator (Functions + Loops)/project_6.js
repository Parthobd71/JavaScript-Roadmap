// ==================== PASSWORD GENERATOR ====================
// Purpose: Practice loops & functions to generate random string

function generatePassword(length) {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*";
    let password = "";

    for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * chars.length);
        password += chars[randomIndex];
    }

    return password;
}

// Usage
console.log("Generated Password: " + generatePassword(8));
console.log("Generated Password: " + generatePassword(12));
