// StringCalculator.test.js

const add = require('./add');

test("returns 0 if input is empty", () => { 
    expect(add("")).toBe(0);
});

test("returns the number inputted if it was only a single number", () => { 
    expect(add("5")).toBe(5);
    });

test("returns the number inputted if it was only a single number", () => { 
    expect(add("5, 8")).toBe(13);
});

test("returns the number inputted if it was only a single number", () => { 
    expect(add("1\n2,3")).toBe(6);
});