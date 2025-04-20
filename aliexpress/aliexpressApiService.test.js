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

    describe('getFeaturedPromoInfo', () => {
        it('should call getPromisified with the correct params', () => {
            const aliexpress = new AliexpressApiService('key', 'secret', 'signature', 'trackingId');
            aliexpress.getFeaturedPromoInfo();
            expect(aliexpress.client.callAPI.mock.calls.pop()).toMatchSnapshot();
        }); 
    });

    describe('getHotProducts', () => {
        it('should call getPromisified with the correct params', () => {
            const aliexpress = new AliexpressApiService('key', 'secret', 'signature', 'trackingId');
            const options = {
                category_ids: '123,456',
                fields: 'commission_rate,sale_price',
                keywords: 'phone',
                max_sale_price: 10000,
                min_sale_price: 1000,
                page_no: 1,
                page_size: 20,
                platform_product_type: 'ALL',
                sort: 'SALE_PRICE_DESC',
                target_currency: 'USD',
                target_language: 'EN',
                delivery_days: '7',
                ship_to_country: 'US',
                promotion_name: 'Summer Sale'
            };
            aliexpress.getHotProducts(options);
            expect(aliexpress.client.callAPI.mock.calls.pop()).toMatchSnapshot();
        });

        it('should call getPromisified with default params when no options provided', () => {
            const aliexpress = new AliexpressApiService('key', 'secret', 'signature', 'trackingId');
            aliexpress.getHotProducts();
            expect(aliexpress.client.callAPI.mock.calls.pop()).toMatchSnapshot();
        });
    });
});