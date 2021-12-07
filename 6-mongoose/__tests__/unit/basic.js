// basic.js
// basic.test.js
// basic.spec.js

// undefined, null,0
function sum(a, b) {
  return a + b;
}

describe('sum function unit test', () => {
  // test
  // test("should")
  it('should return the correct sum of two numbers', () => {
    const result = sum(1, 2);
    expect(result).toBe(3);
  });
});
