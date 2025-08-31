// // =====================================
// // 01 - TYPESCRIPT BASICS
// // =====================================
// // NOTES:
// // TypeScript = Superset of JS with types
// // Helps catch errors during development

// // Example 1: Basic types
// let name: string = "Partho";
// let age: number = 25;
// let isActive: boolean = true;

// // Example 2: Array types
// let numbers: number[] = [1,2,3];
// let names: string[] = ["Partho","Kumar"];

// // Example 3: Object types
// type User = {name:string, age:number};
// let user: User = {name:"Partho", age:25};

// // Example 4: Function types
// function greet(user: User): string{
//     return `Hello, ${user.name}`;
// }

// // Example 5: Optional & Default parameters
// function sayHi(name: string, age?: number){
//     console.log(`Hi ${name}, age: ${age ?? "unknown"}`);
// }

// // Example 6: Union types
// let id: string | number = 123;
// id = "abc123";

// // Example 7: Type assertion
// let someValue: any = "Hello";
// let strLength: number = (someValue as string).length;

// // Example 8: Interface
// interface Product { name: string; price: number; }
// let product: Product = {name:"Laptop", price:1200};

// // Example 9: Enum
// enum Color {Red, Green, Blue};
// let c: Color = Color.Green;

// // Example 10: Generics
// function wrap<T>(value:T): T[]{ return [value]; }
// console.log(wrap(5));
// console.log(wrap("Hello"));
