const AliexpressApiService = require("./aliexpressApiService");
const AliexpressApiWrapper = require("./AliexpressApiWrapper");

jest.mock('./AliexpressApiWrapper', () => {
    return jest.fn().mockImplementation(() => {
      return {
        callAPI: jest.fn(),
      };
    });
  });


let executePromisifiedMock = jest.fn();
let getPromisifiedMock = jest.fn();
let getMock = jest.fn();
let executeMock = jest.fn();

describe('aliexpressApiService', () => {
    
    describe('getAffiliateLink', () => {
        it('should call getPromisified with the correct params', () => {
            const aliexpress = new AliexpressApiService('key', 'secret', 'signature', 'trackingId');
            aliexpress.getAffiliateLink('www.test.com');
            expect(aliexpress.client.callAPI.mock.calls.pop()).toMatchSnapshot();
        });
    });

    describe('getAffiliateLinks', () => {
        it('should call getPromisified with the correct params', () => {
            const aliexpress = new AliexpressApiService('key', 'secret', 'signature', 'trackingId');
            aliexpress.getAffiliateLink(['www.test.com', 'www.test2.com']);
            expect(aliexpress.client.callAPI.mock.calls.pop()).toMatchSnapshot();
        });
    });

    describe('getProductsDetails', () => {
        it('should call getPromisified with the correct params', () => {
            const aliexpress = new AliexpressApiService('key', 'secret', 'signature', 'trackingId');
            aliexpress.getProductsDetails(['12334', '4321']);
            expect(aliexpress.client.callAPI.mock.calls.pop()).toMatchSnapshot();
        });
    });
});