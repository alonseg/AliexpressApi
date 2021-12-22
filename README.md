# aliexpress-api
A package that wraps Aliexpress API for node

## Description


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
import {aliexpress} from 'aliexpress-api';

...

const aliexpressApiService = new AliexpressApiService(ALIEXPRESS_APP_KEY, ALIEXPRESS_APP_SECRET, ALIEXPRESS_APP_SIGNATURE, ALIEXPRESS_TRACKING_ID);
aliexpressApiService.getAffiliateLink(aliexpressUrl);
...
```

## Authors

Alon Segal

## Version History

* 1.0
    * Initial Release - no UT, not all APIs covered

## License

## Contributing

Feel absolutly free and welcome to contribute in any way :) 