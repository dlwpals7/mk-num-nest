const { test, expect } = require("@jest/globals");
const lib = require("./lib");

// avg
test("avg([3, 5, 7]) should be 5", () => {
    expect(lib.avg([3, 5, 7])).toBe(5);
});

test("avg([-5, 5]) should be 0", () => {
    expect(lib.avg([-5, 5])).toBe(0);
});

// prime
test("prime(7) should be true", () => {
    expect(lib.prime(7)).toBe(true);
});

test("prime(169) should be false", () => {
    expect(lib.prime(169)).toBe(false);
});

// factorial
test("factorial(2) should be 2", () => {
    expect(lib.factorial(2)).toBe(2);
});

test("factorial(13) should be 6,227,020,800", () => {
    expect(lib.factorial(13)).toBe(6227020800);
});