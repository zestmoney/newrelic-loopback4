# newrelic-loopback4
Loopback 4 Instrumentation for the [Node agent](https://github.com/newrelic/node-newrelic)

 [![Build status](https://img.shields.io/travis/zestmoney/newrelic-loopback4/master.svg?style=flat-square)](https://travis-ci.org/zestmoney/newrelic-loopback4)


### Overview

Loopback 4 uses expressjs under the hood and mounts itself as request handler. It is the default handler irrespective of the URI. So understanding the correct API URL becomes difficult. 

```
npm install newrelic-loopback4
```
```js
// index.js
require('newrelic-loopback4')
```

### Supported features

- Correct path 