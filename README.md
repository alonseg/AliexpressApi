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
