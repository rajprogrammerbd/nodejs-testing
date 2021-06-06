const { Randoms } = require("./../../index");
const helper = require("./../../src/helper/index");

// Mock testing
describe("random module", () => {
    it('getting object of image links using external apis', () => {
        helper.gettingImage = jest.fn().mockResolvedValue([{ albumId: 1, id: 2, title: 'demo title', url: 'demo url', thumbnailUrl: 'demo_thumbnails url' }]);

        Randoms.imageArray().then(obj => {
            expect(obj).toEqual(expect.arrayContaining([{ albumId: 1, id: 2, title: 'demo title', url: 'demo url', thumbnailUrl: 'demo_thumbnails url' }]));
        });
    });
})