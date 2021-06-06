const { Strings } = require("./../../index");

describe("string module test", () => {
    it('it should return the name of john doe', () => {
        const result = Strings.joiner('john', 'doe');

        expect(result).toContain("john doe");
    });

    it('it should throw an error', () => {
        expect(() => Strings.joiner()).toThrow();
    });
})