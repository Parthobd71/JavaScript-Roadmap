// ==================== TIP CALCULATOR ====================
// Purpose: Learn functions with default parameters

// Function with default tip percentage (10%)
function calculateTip(amount, tipPercent = 10) {
    let tip = (amount * tipPercent) / 100;
    let total = amount + tip;
    return `Bill: $${amount}, Tip: $${tip}, Total: $${total}`;
}

// Usage
console.log(calculateTip(100));     // Uses default 10%
console.log(calculateTip(200, 15)); // Uses custom 15%
