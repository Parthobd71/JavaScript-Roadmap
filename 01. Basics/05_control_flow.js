// ==================== CONTROL FLOW ====================

// 1. if-else
let num = 10;
if(num > 0){
    console.log("Positive number");
}else if(num < 0){
    console.log("Negative number");
}else{
    console.log("Zero");
}

// 2. Nested if
let score = 85;
if(score >= 90){
    console.log("Grade A");
}else if(score >= 75){
    console.log("Grade B");
}else{
    console.log("Grade C or below");
}

// 3. switch-case
let color = "blue";
switch(color){
    case "red":
        console.log("Color is red");
        break;
    case "blue":
        console.log("Color is blue");
        break;
    case "green":
        console.log("Color is green");
        break;
    default:
        console.log("Other color");
}

// 4. Comparison operators in if
if(num >= 5 && num <= 15){
    console.log("Number between 5 and 15");
}

// 5. Logical operators
let isAdult = true;
let hasID = false;
if(isAdult && hasID){
    console.log("Access allowed");
}else{
    console.log("Access denied");
}

// 6. Ternary operator inside control flow
let access = (isAdult && hasID) ? "Allowed" : "Denied";
console.log("Ternary access:", access);

// 7. Short-circuit evaluation
console.log("Short-circuit AND:", true && "Second"); // returns second value if first is true
console.log("Short-circuit OR:", false || "Default"); // returns second value if first is false

// 8. Conditional execution with multiple statements
if(num > 5){
    console.log("Greater than 5");
    console.log("Still inside if block");
}

// 9. Nested ternary
let mark = 70;
let result = (mark >= 80) ? "A" : (mark >= 60) ? "B" : "C";
console.log("Nested ternary result:", result);

// 10. Summary
/*
Control Flow:
- if / else if / else
- switch / case / default
- Logical operators: &&, ||, !
- Ternary operator: condition ? trueExpr : falseExpr
- Short-circuit evaluation: useful for default values or conditional execution
*/



