// StringCalculator.test.js

const add = require('./add');

test("returns 0 if input is empty", () => { 
expect(add("")).toBe(0);
});