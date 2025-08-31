// ==================== TIME, DATE, WEATHER ====================

// 1. Current date and time
let now = new Date();
console.log("Current date & time:", now);

// 2. Extract year, month, day
console.log("Year:", now.getFullYear());
console.log("Month:", now.getMonth()+1); // Month starts from 0
console.log("Day:", now.getDate());

// 3. Hours, minutes, seconds
console.log("Hours:", now.getHours());
console.log("Minutes:", now.getMinutes());
console.log("Seconds:", now.getSeconds());

// 4. Day of week
let days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
console.log("Day of week:", days[now.getDay()]);

// 5. Timestamp
console.log("Timestamp:", now.getTime()); // milliseconds since Jan 1 1970

// 6. Creating specific date
let birthday = new Date("1998-05-15");
console.log("Birthday:", birthday);

// 7. Adding days
let tomorrow = new Date();
tomorrow.setDate(now.getDate()+1);
console.log("Tomorrow:", tomorrow);

// 8. Subtracting days
let yesterday = new Date();
yesterday.setDate(now.getDate()-1);
console.log("Yesterday:", yesterday);

// 9. Simulated weather example
let weather = "Sunny";
console.log("Weather today:", weather);

// 10. Summary
/*
Date object in JS:
- new Date(): current date/time
- getFullYear(), getMonth(), getDate(), getDay()
- getHours(), getMinutes(), getSeconds()
- setDate(), setMonth(), setFullYear() to modify date
- Time calculations use getTime()
- Weather example can use API in real apps
*/
