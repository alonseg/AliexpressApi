const AliexpressApiService = require("./aliexpressApiService");
const {TopClient} = require('./lib/api/topClient');


jest.mock('./lib/api/topClient');

let executePromisifiedMock = jest.fn();
let getPromisifiedMock = jest.fn();
let getMock = jest.fn();
let executeMock = jest.fn();

describe('aliexpressApiService', () => {
    beforeAll(()=>{
        TopClient.mockImplementation(()=>{
                return {
                    executePromisified: executePromisifiedMock,
                    getPromisified: getPromisifiedMock,
                    get: getMock,
                    execute: executeMock
                }
        });
    })
    beforeEach(() => {
        executePromisifiedMock.mockClear();
        getPromisifiedMock.mockClear();
        getMock.mockClear();
        executeMock.mockClear();
    });
    
    describe('getAffiliateLink', () => {
        it('should call getPromisified with the correct params', () => {
            const aliexpress = new AliexpressApiService('key', 'secret', 'signature', 'trackingId');
            aliexpress.client.getPromisified = getPromisifiedMock;
            aliexpress.getAffiliateLink('www.test.com');
            expect(getPromisifiedMock.mock.calls).toMatchSnapshot();
        });
    });

    describe('getAffiliateLinks', () => {
        it('should call getPromisified with the correct params', () => {
            const aliexpress = new AliexpressApiService('key', 'secret', 'signature', 'trackingId');
            aliexpress.client.getPromisified = getPromisifiedMock;
            aliexpress.getAffiliateLink(['www.test.com', 'www.test2.com']);
            expect(getPromisifiedMock.mock.calls).toMatchSnapshot();
        });
    });

    describe('getProductsDetails', () => {
        it('should call getPromisified with the correct params', () => {
            const aliexpress = new AliexpressApiService('key', 'secret', 'signature', 'trackingId');
            aliexpress.client.getPromisified = getPromisifiedMock;
            aliexpress.getProductsDetails(['12334', '4321']);
            expect(getPromisifiedMock.mock.calls).toMatchSnapshot();
        });
    });
});