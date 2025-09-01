// ==================== CURRENCY CONVERTER ====================
// Purpose: Practice function with return and simple math

function convertUSDToBDT(usd) {
    const rate = 110; // Example conversion rate: 1 USD = 110 BDT
    return usd * rate;
}

function convertBDTToUSD(bdt) {
    const rate = 110;
    return bdt / rate;
}

// Usage
console.log("50 USD = " + convertUSDToBDT(50) + " BDT");
console.log("11000 BDT = " + convertBDTToUSD(11000).toFixed(2) + " USD");
