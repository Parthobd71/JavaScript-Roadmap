// =====================================
// 04 - TESTING (JEST / MOCHA)
// =====================================
// NOTES:
// Testing ensures code correctness

// Example 1: Jest basic test
// function sum(a,b){ return a+b; }
// test("adds 1+2 to equal 3", ()=>{ expect(sum(1,2)).toBe(3); });

// Example 2: Async test
// async function fetchData(){ return "data"; }
// test("fetch data", async ()=>{ await expect(fetchData()).resolves.toBe("data"); });

// Example 3: Mock functions
// const mockFn = jest.fn();
// mockFn("Hello");
// expect(mockFn).toHaveBeenCalled();

// Example 4: Mocha + Chai
// const assert = require("chai").assert;
// describe("Array", ()=>{ it("should return length 3", ()=>{ assert.equal([1,2,3].length,3); }); });

// Example 5: Snapshot testing (React)
// expect(renderer.create(<Component />).toJSON()).toMatchSnapshot();
