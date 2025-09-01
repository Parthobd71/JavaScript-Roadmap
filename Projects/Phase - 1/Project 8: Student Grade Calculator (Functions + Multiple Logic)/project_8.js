// ==================== STUDENT GRADE CALCULATOR ====================
// Purpose: Function with multiple conditions & return

function calculateGrade(score) {
    if (score >= 90) return "A+ 🎉";
    else if (score >= 80) return "A";
    else if (score >= 70) return "B";
    else if (score >= 60) return "C";
    else return "F ❌";
}

// Usage
console.log("Score 95 → Grade: " + calculateGrade(95));
console.log("Score 72 → Grade: " + calculateGrade(72));
console.log("Score 55 → Grade: " + calculateGrade(55));
