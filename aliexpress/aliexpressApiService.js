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

    getFeaturedPromoInfo() {
        return this.client.callAPI('', {
            'method': 'aliexpress.affiliate.featuredpromo.get',
            'app_signature': this.appSignature,
            'tracking_id': this.trackingId,
        });
    }

    /**
     * Get hot products from AliExpress
     * @param {Object} options - Query options
     * @param {string} [options.category_ids] - List of category IDs
     * @param {string} [options.fields] - Response parameter list (e.g. 'commission_rate,sale_price')
     * @param {string} [options.keywords] - Filter products by keywords
     * @param {number} [options.max_sale_price] - Filter products by highest price (in cents)
     * @param {number} [options.min_sale_price] - Filter products by lowest price (in cents)
     * @param {number} [options.page_no=1] - Page number
     * @param {number} [options.page_size=20] - Record count of each page (1-50)
     * @param {string} [options.platform_product_type] - Product type: ALL,PLAZA,TMALL
     * @param {string} [options.sort] - Sort by: SALE_PRICE_ASC, SALE_PRICE_DESC, LAST_VOLUME_ASC, LAST_VOLUME_DESC
     * @param {string} [options.target_currency] - Target currency (e.g. USD, GBP, CAD, EUR)
     * @param {string} [options.target_language] - Target language (e.g. EN, RU, PT, ES)
     * @param {string} [options.delivery_days] - Estimated delivery days (3, 5, 7, 10)
     * @param {string} [options.ship_to_country] - Ship to country code
     * @param {string} [options.promotion_name] - Promotion name
     * @returns {Promise}
     */
    getHotProducts(options = {}) {
        const defaultOptions = {
            page_no: '1',
            page_size: '20',
            target_currency: 'USD',
            target_language: 'EN',
            ship_to_country: 'US'
        };

        const params = {
            'method': 'aliexpress.affiliate.hotproduct.query',
            'app_signature': this.appSignature,
            'tracking_id': this.trackingId,
            ...defaultOptions,
            ...options
        };

        // Convert numeric values to strings if they exist
        if (params.max_sale_price !== undefined) params.max_sale_price = String(params.max_sale_price);
        if (params.min_sale_price !== undefined) params.min_sale_price = String(params.min_sale_price);
        if (params.page_no !== undefined) params.page_no = String(params.page_no);
        if (params.page_size !== undefined) params.page_size = String(params.page_size);

        return this.client.callAPI('', params);
    }

    /**
     * Get products from AliExpress
     * @param {Object} options - Query options
     * @param {string} [options.category_ids] - List of category IDs
     * @param {string} [options.fields] - Response parameter list (e.g. 'commission_rate,sale_price')
     * @param {string} [options.keywords] - Filter products by keywords
     * @param {number} [options.max_sale_price] - Filter products by highest price (in cents)
     * @param {number} [options.min_sale_price] - Filter products by lowest price (in cents)
     * @param {number} [options.page_no=1] - Page number
     * @param {number} [options.page_size=20] - Record count of each page (1-50)
     * @param {string} [options.platform_product_type] - Product type: ALL,PLAZA,TMALL
     * @param {string} [options.sort] - Sort by: SALE_PRICE_ASC, SALE_PRICE_DESC, LAST_VOLUME_ASC, LAST_VOLUME_DESC
     * @param {string} [options.target_currency] - Target currency (e.g. USD, GBP, CAD, EUR)
     * @param {string} [options.target_language] - Target language (e.g. EN, RU, PT, ES)
     * @param {string} [options.delivery_days] - Estimated delivery days (3, 5, 7, 10)
     * @param {string} [options.ship_to_country] - Ship to country code
     * @param {string} [options.promotion_name] - Promotion name
     * @returns {Promise}
     */
    getProducts(options = {}) {
        const defaultOptions = {
            page_no: '1',
            page_size: '20',
            target_currency: 'USD',
            target_language: 'EN',
            ship_to_country: 'US'
        };

        const params = {
            'method': 'aliexpress.affiliate.product.query',
            'app_signature': this.appSignature,
            'tracking_id': this.trackingId,
            ...defaultOptions,
            ...options
        };

        // Convert numeric values to strings if they exist
        if (params.max_sale_price !== undefined) params.max_sale_price = String(params.max_sale_price);
        if (params.min_sale_price !== undefined) params.min_sale_price = String(params.min_sale_price);
        if (params.page_no !== undefined) params.page_no = String(params.page_no);
        if (params.page_size !== undefined) params.page_size = String(params.page_size);

        return this.client.callAPI('', params);
    }
}