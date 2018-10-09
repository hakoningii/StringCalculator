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

test("Calling Add with a negative number will throw an exception “Negatives not allowed:“ listing all negative numbers that were in the list of numbers", () => { 
    expect(add("-1, 2")).toBe("Negatives not allowed: -1");
});

test("Ignoring numbers bigger the 1000", () => { 
    expect(add("1002, 2, 3, 12341")).toBe(5);
});

test("The Add method now handles a different delimiter", () => { 
    expect(add("//;\n1;2")).toBe(3);
});
