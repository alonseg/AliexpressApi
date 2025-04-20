# aliexpress-api

A Node.js package that wraps the Aliexpress API for affiliate marketing and product data access.

## Description

This package provides a simple interface to interact with the Aliexpress Open Platform API. It's particularly useful for affiliate marketing and product data retrieval.

Based on the [Aliexpress Open Platform API Documentation](https://openservice.aliexpress.com/doc/doc.htm?spm=a2o9m.11193535.0.0.13e959b2203wJQ&nodeId=27493&docId=118729#/?docId=1366)

## Installation

```bash
npm install aliexpress-api
```

## Dependencies

- request: ^2.88.2
- mime: ^3.0.0

## Usage

```javascript
const AliexpressApiService = require("aliexpress-api");

// Initialize the service with your credentials
const aliexpressApiService = new AliexpressApiService(
  ALIEXPRESS_APP_KEY,
  ALIEXPRESS_APP_SECRET,
  ALIEXPRESS_APP_SIGNATURE,
  ALIEXPRESS_TRACKING_ID
);

// Get affiliate link for a product
const affiliateLink = await aliexpressApiService.getAffiliateLink(aliexpressUrl);
```

## Available API Functions

### Affiliate Links

#### `getAffiliateLink(url, promotionLinkType = '0')`
Generate an affiliate link for a single product URL.

**Parameters:**
- `url` (string): The Aliexpress product URL
- `promotionLinkType` (string): Type of promotion link (default: '0')

#### `getAffiliateLinks(urls, promotionLinkType = '0')`
Generate affiliate links for multiple product URLs.

**Parameters:**
- `urls` (Array): Array of Aliexpress product URLs
- `promotionLinkType` (string): Type of promotion link (default: '0')

### Product Information

#### `getProductsDetails(ids, fields = '', country = 'US', targetCurrency = 'USD', targetLang = 'EN')`
Get detailed information about specific products.

**Parameters:**
- `ids` (Array): Array of product IDs
- `fields` (string): Comma-separated list of fields to return
- `country` (string): Target country code (default: 'US')
- `targetCurrency` (string): Target currency (default: 'USD')
- `targetLang` (string): Target language (default: 'EN')

#### `getHotProducts(options = {})`
Get trending/hot products from Aliexpress.

**Options:**
- `category_ids` (string): List of category IDs
- `fields` (string): Response parameter list (e.g. 'commission_rate,sale_price')
- `keywords` (string): Filter products by keywords
- `max_sale_price` (number): Filter products by highest price (in cents)
- `min_sale_price` (number): Filter products by lowest price (in cents)
- `page_no` (number): Page number (default: 1)
- `page_size` (number): Record count per page (1-50, default: 20)
- `platform_product_type` (string): Product type: ALL, PLAZA, TMALL
- `sort` (string): Sort by: SALE_PRICE_ASC, SALE_PRICE_DESC, LAST_VOLUME_ASC, LAST_VOLUME_DESC
- `target_currency` (string): Target currency (e.g. USD, GBP, CAD, EUR)
- `target_language` (string): Target language (e.g. EN, RU, PT, ES)
- `delivery_days` (string): Estimated delivery days (3, 5, 7, 10)
- `ship_to_country` (string): Ship to country code
- `promotion_name` (string): Promotion name

#### `getProducts(options = {})`
Search for products on Aliexpress.

**Options:**
Same as `getHotProducts` options.

### Promotions

#### `getFeaturedPromoInfo()`
Get information about featured promotions.

## Configuration

You'll need the following credentials from Aliexpress Open Platform:

- `ALIEXPRESS_APP_KEY`: Your application key
- `ALIEXPRESS_APP_SECRET`: Your application secret
- `ALIEXPRESS_APP_SIGNATURE`: Your application signature
- `ALIEXPRESS_TRACKING_ID`: Your tracking ID

## Development

To run tests:

```bash
npm test
```

## Version History

* 1.2.2
    * Current version
* 1.2.0
    * Migrated to use new Aliexpress endpoint and standards
* 1.0.0
    * Initial Release

## License

ISC

## Contributing

Contributions are welcome! Feel free to submit issues and pull requests.

If you have any questions, you can:
- Reach out on GitHub
- Join the Facebook affiliate group: [Aliexpress Affiliate Marketing](https://www.facebook.com/groups/330128385291320)

## Author

Alon Segal
