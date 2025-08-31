// ==================== STRINGS ====================

// 1. String creation
let str1 = "Hello World";       // double quotes
let str2 = 'Hello JS';          // single quotes
let str3 = `Hello Template`;    // backticks (template literals)
console.log(str1, str2, str3);

// 2. String length
console.log("Length of str1:", str1.length);

// 3. Accessing characters
console.log("First char of str1:", str1[0]);
console.log("Last char of str1:", str1[str1.length-1]);

// 4. String concatenation
let greeting = str1 + " " + str2;
console.log("Concatenated:", greeting);

// 5. Using template literals
let name = "Partho";
let message = `Hello ${name}, welcome to JavaScript!`;
console.log("Template literal:", message);

// 6. Common string methods

let sample = "  JavaScript is fun!  ";

// a) toUpperCase / toLowerCase
console.log("Uppercase:", sample.toUpperCase());
console.log("Lowercase:", sample.toLowerCase());

// b) trim (remove whitespace)
console.log("Trimmed:", sample.trim());

// c) includes (check if substring exists)
console.log("Includes 'fun':", sample.includes("fun"));
console.log("Includes 'boring':", sample.includes("boring"));

// d) indexOf / lastIndexOf
console.log("Index of 'is':", sample.indexOf("is"));
console.log("Last index of 'a':", sample.lastIndexOf("a"));

// e) slice / substring / substr
console.log("Slice (0,10):", sample.slice(0,10));
console.log("Substring (0,10):", sample.substring(0,10));
console.log("Substr (0,10):", sample.substr(0,10)); // deprecated but works

// f) split (string to array)
let words = sample.split(" ");
console.log("Split by space:", words);

// g) replace / replaceAll
console.log("Replace 'fun' with 'awesome':", sample.replace("fun","awesome"));
console.log("Replace all 'a' with 'A':", sample.replaceAll("a","A"));

// h) charAt
console.log("Character at index 5:", sample.charAt(5));

// i) startsWith / endsWith
console.log("Starts with '  Java':", sample.startsWith("  Java"));
console.log("Ends with '!  ':", sample.endsWith("!  "));

// j) repeat
console.log("Repeat 3 times:", "Hi! ".repeat(3));

// k) valueOf
console.log("ValueOf string:", sample.valueOf());

// 7. Escape characters
let escapeStr = "Line1\nLine2\tTabbed\\Backslash\'Single\"Double";
console.log("Escape characters:", escapeStr);

// 8. Comparison
let a = "Apple";
let b = "Banana";
console.log("a > b:", a > b); // compares lexicographically

// 9. Template literals multiline
let multiLine = `This is
a multi-line
string`;
console.log("Multi-line string:\n", multiLine);

// 10. Type conversion to string
let num = 123;
let bool = true;
console.log("Number to string:", String(num));
console.log("Boolean to string:", String(bool));

// ==================== SUMMARY ====================
/*
- Strings are sequences of characters.
- Can be created with '', "", or `` (template literals).
- Template literals support interpolation: `${variable}`.
- Important methods:
  - length, charAt, indexOf, lastIndexOf, slice, substring, substr
  - toUpperCase, toLowerCase, trim, includes, startsWith, endsWith
  - split, replace, replaceAll, repeat, valueOf
- Escape sequences: \n, \t, \\, \', \"
- Strings are immutable in JavaScript.
*/
