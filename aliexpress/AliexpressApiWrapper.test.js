const AliexpressApiWrapper = require('./AliexpressApiWrapper');
const crypto = require('crypto');

jest.mock('crypto', () => ({
    createHmac: jest.fn().mockReturnThis(),
    update: jest.fn().mockReturnThis(),
    digest: jest.fn().mockReturnValue('hash'),
}));
jest.spyOn(Date, 'now').mockImplementation(() => 123456789);


describe('AliexpressApiWrapper', () => {
    let apiWrapper;

    beforeEach(() => {
        apiWrapper = new AliexpressApiWrapper('appKey', 'appSecret');
    });

    it('should generate the signature correctly', async () => {
        const apiName = 'someApi';
        const params = { param1: 'value1', param2: 'value2' };

        const signature = await apiWrapper.generateSignature(apiName, params);

        // Assert the signature is generated correctly
        expect(signature).toBeDefined();
        expect(typeof signature).toBe('string');
        // Add more specific assertions based on your implementation
    });

    it('should make the API call correctly', async () => {
        const apiPath = '/some/api/path';
        const businessParams = { param1: 'value1', param2: 'value2' };
        global.fetch = jest.fn((url, options) => ({ ok: true, json: async () => ({url, options}) 
        }));

        const response = await apiWrapper.callAPI(apiPath, businessParams);

        // Assert the response is as expected
        expect(response).toMatchSnapshot();
        expect(fetch).toHaveBeenCalledWith(
            expect.stringContaining(apiPath),
            expect.objectContaining({
                method: 'GET',
                headers: expect.objectContaining({
                    'Content-Type': 'application/json',
                }),
            }),
        );
    });
});
