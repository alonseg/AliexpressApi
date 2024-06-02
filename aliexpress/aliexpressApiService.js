const AliexpressApiWrapper = require('./AliexpressApiWrapper');
const { ALIEXPRESS_REST_URL } = require('./constants');

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

        this.client = new AliexpressApiWrapper(appkey, appsecret);
    }

    /**
     * 
     * @param {Array} urls 
     * @param {string} promotionLinkType 
     * @returns 
     */
    getAffiliateLinks(urls, promotionLinkType = '0') {
        return this.client.callAPI('', {
            'method': 'aliexpress.affiliate.link.generate',
            'app_signature': this.appSignature,
            'tracking_id': this.trackingId,
            'promotion_link_type': promotionLinkType,
            'source_values': `${urls.join(',')}`
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
    
    /**
     * 
     * @param {Array} ids 
     * @param {string} fields 
     * @param {string} country - default is 'US'
     * @param {string} targetCurrency - default is 'USD'
     * @param {string} targetLang - default is 'EN'
     * @returns 
     */
    getProductsDetails(ids, fields = '', country = 'US', targetCurrency = 'USD', targetLang = 'EN') {
        return this.client.callAPI('', {
            'method': 'aliexpress.affiliate.productdetail.get',
            'app_signature': this.appSignature,
            fields,
            'product_ids': `${ids.join(',')}`,
            'target_currency': targetCurrency,
            'target_language': targetLang,
            'tracking_id': this.trackingId,
        });
    }
}