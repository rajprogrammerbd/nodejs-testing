const { Numbers } = require("./../../index");

describe("number module test", () => {
    it('get all the even numbers till all the number gets to 10', () => {
        const result = Numbers.even(10);

        expect(result).toEqual(expect.arrayContaining([0, 2, 4, 6, 8, 10]));
    });

    it('it should throw new error', () => {
        expect(() => Numbers.even()).toThrow();
    });

    it('get all the odd numbers till all the number gets to 10', () => {
        const result = Numbers.odd(10);

        expect(result).toEqual(expect.arrayContaining([1, 3, 5, 7, 9]));
    });

    it('should return an error', () => {
        expect(() => Numbers.odd()).toThrow();
    });
})