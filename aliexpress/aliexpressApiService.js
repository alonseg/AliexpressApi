const util = require('util');
const { ALIEXPRESS_REST_URL } = require('./constants');

TopClient = require('./lib/api/topClient').TopClient;

/**
 * based on https://open.taobao.com/api.htm?docId=48595&docType=2&scopeId=17063
 */
module.exports = class AliexpressApiService {
    /**
     * 
     * @param {string} appkey 
     * @param {string} appsecret 
     * @param {string} appSignature 
     * @param {string} trackingId 
     */
    constructor(appkey, appsecret, appSignature, trackingId) {
        this.appSignature = appSignature;
        this.trackingId = trackingId;

        this.client = new TopClient({
            'appkey': appkey,
            'appsecret': appsecret,
            'REST_URL': ALIEXPRESS_REST_URL
        });
        this.client.getPromisified = util.promisify(this.client.get);
        // uses a post request
        this.client.executePromisified = util.promisify(this.client.execute);
    }

    /**
     * 
     * @param {Array} urls 
     * @param {string} promotionLinkType 
     * @returns 
     */
    getAffiliateLinks(urls, promotionLinkType = '0') {
        return this.client.getPromisified('aliexpress.affiliate.link.generate', {
            'app_signature': this.appSignature,
            'promotion_link_type': promotionLinkType,
            'source_values': `${urls.join(',')}`,
            'tracking_id': this.trackingId
        });
    }

    getProductsDetails(ids, fields = '', country = 'US', targetCurrency = 'USD', targetLang = 'EN') {
        return this.client.getPromisified('aliexpress.affiliate.productdetail.get', {
            'app_signature': this.appSignature,
	        fields,
	        'product_ids': `${ids.join(',')}`,
	        'target_currency': targetCurrency,
	        'target_language': targetLang,
	        'tracking_id': this.trackingId,
	        country
        });
    }

    /**
     * 
     * @param {string} url 
     * @param {string} promotionLinkType 
     * @returns {Promise}
     */
    getAffiliateLink(url, promotionLinkType = '0') {
        return this.getAffiliateLinks([url], promotionLinkType);
    }
}