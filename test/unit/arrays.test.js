const { Arrays } = require("./../../index");

describe("array module test", () => {
    it('should return an array of being jointed.', () => {
        const result = Arrays.jointArrays(['a'], ['b']);

        expect(result).toEqual(expect.arrayContaining(['a', 'b']))
    });

    it('should thow an error', () => {

        expect(() => Arrays.jointArrays()).toThrow();
    });
});