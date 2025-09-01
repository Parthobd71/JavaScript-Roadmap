// ==================== BMI CALCULATOR ====================
// Purpose: Practice functions with parameters and return values

// Step 1: Create a function to calculate BMI
function calculateBMI(weight, height) {
    // Formula: BMI = weight (kg) / height^2 (m)
    let bmi = weight / (height * height);

    // Step 2: Return result
    return bmi;
}

// Step 3: Use function
let weight = 70; // kg
let height = 1.75; // meters
let myBMI = calculateBMI(weight, height);

// Step 4: Interpret result with conditions
if (myBMI < 18.5) {
    console.log("BMI: " + myBMI.toFixed(2) + " → Underweight");
} else if (myBMI < 24.9) {
    console.log("BMI: " + myBMI.toFixed(2) + " → Normal weight ✅");
} else if (myBMI < 29.9) {
    console.log("BMI: " + myBMI.toFixed(2) + " → Overweight ⚠️");
} else {
    console.log("BMI: " + myBMI.toFixed(2) + " → Obese ❌");
}

// ✅ Function makes BMI calculation reusable anywhere
