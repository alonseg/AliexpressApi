# aliexpress-api
A package that wraps Aliexpress API for node

## Description

Based on the following API
https://openservice.aliexpress.com/doc/doc.htm?spm=a2o9m.11193535.0.0.13e959b2203wJQ&nodeId=27493&docId=118729#/?docId=1366

## Getting Started

### Dependencies

None ATM

### Installing

* Simply install using NPM
```
npm install aliexpress-api
```

### Usage

start by importing
```
const AliexpressApiService = require("./aliexpressApiService");

...

const aliexpressApiService = new AliexpressApiService(ALIEXPRESS_APP_KEY, ALIEXPRESS_APP_SECRET, ALIEXPRESS_APP_SIGNATURE, ALIEXPRESS_TRACKING_ID);
aliexpressApiService.getAffiliateLink(aliexpressUrl);
...
```

## Authors

Alon Segal

## Version History

* 1.0
    * Initial Release - not all APIs covered
* 1.2.0
    * migrated to use new Aliexpress enpoint and standards 

## License

## Contributing

Feel absolutly free and welcome to contribute in any way :) 

If you have any questions, reach out to me on github,
or on the FB affiliate group I manage https://www.facebook.com/groups/330128385291320
