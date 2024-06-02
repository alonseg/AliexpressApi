const crypto = require('crypto');
const { ALIEXPRESS_REST_URL } = require('./constants');

// based on https://openservice.aliexpress.com/doc/doc.htm?spm=a2o9m.11193535.0.0.13e959b2203wJQ&nodeId=27493&docId=118729#/?docId=1366
module.exports =  class AliexpressApiWrapper {
    constructor(appKey, appSecret) {
        this.appKey = appKey;
        this.appSecret = appSecret;
    }

    // Helper function to generate the signature
    async generateSignature(apiName, params) {
        // Sort parameters by ASCII
        const sortedParams = Object.keys(params).sort().map(key => `${key}${params[key]}`).join('');
        
        // Concatenate the appSecret at the beginning and the end
        const stringToSign = `${apiName}${sortedParams}`;
        
        // Generate HMAC SHA-256 hash
        const hmac = crypto.createHmac('sha256', this.appSecret);
        hmac.update(stringToSign);
        const signature = hmac.digest('hex').toUpperCase();
        
        return signature;
    }

    // Method to make the API call
    async callAPI(apiPath, businessParams) {
        const commonParams = {
            app_key: this.appKey,
            timestamp: Date.now().toString(),
            sign_method: 'sha256',
            ...businessParams
        };

        // Generate the signature
        const signature = await this.generateSignature(apiPath, commonParams);
        commonParams.sign = signature;

        // Assemble the query string
        const queryString = new URLSearchParams(commonParams).toString();
        const url = `${ALIEXPRESS_REST_URL}${apiPath}?${queryString}`;
        
        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            console.error('Error making API call:', error);
            throw error;
        }
    }
}