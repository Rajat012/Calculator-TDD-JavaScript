
const Calculator = require('../src/Calculator');

test('adds numbers correctly', () => {
    expect(Calculator.add("1,2,3")).toBe(6);
    expect(Calculator.add("4\n5\n6")).toBe(15);
    expect(() => Calculator.add("1,-2,3")).toThrow("negatives not allowed: -2");
});

test('handles custom delimiter', () => {
    expect(Calculator.add("//;\n1;2;3")).toBe(6);
});
