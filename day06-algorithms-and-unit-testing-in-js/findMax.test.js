const findMax = require("./findMax");

describe("findMax should take an array and return the largest number", () => {
    test("findMax([]) => null", () => {
        expect(findMax([])).toBe(null);
    })

    test("findMax([1] => 1", () => {
        expect(findMax([1])).toBe(1);
    })

    test("findMax([1, 5, 3, 4] => 5", () => {
        expect(findMax([1, 5, 3, 4])).toBe(5);
    })
})