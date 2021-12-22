const AliexpressApiService = require("./aliexpressApiService");
const TopClient = require('./lib/api/topClient');

let executePromisifiedMock = jest.fn();
let getPromisifiedMock = jest.fn();
const mockTopClient = jest.fn(() => ({
    executePromisified: executePromisifiedMock,
    getPromisified: getPromisifiedMock
}));
TopClient.TopClient = mockTopClient;

describe('aliexpressApiService', () => {
    describe('getAffiliateLinks', () => {
        it('should call getPromisified with the correct params', () => {
            const aliexpress = new AliexpressApiService('key', 'secret', 'signature', 'trackingId');
            aliexpress.getAffiliateLink('www.test.com');
            expect(getPromisifiedMock.mock.calls).toMatchSnapshot();
        });
    });
});