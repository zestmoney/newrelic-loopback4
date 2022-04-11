# newrelic-loopback4

 [![Build status](https://img.shields.io/travis/zestmoney/newrelic-loopback4/master.svg?style=flat-square)](https://travis-ci.org/zestmoney/newrelic-loopback4)
 [![NPM Version](https://img.shields.io/npm/v/newrelic-loopback4.svg)](https://www.npmjs.com/package/newrelic-loopback4)
 [![NPM Downloads](https://img.shields.io/npm/dt/newrelic-loopback4.svg)](https://www.npmjs.com/package/newrelic-loopback4)
 [![LICENSE](https://img.shields.io/npm/l/newrelic-loopback4.svg)](https://github.com/arshadkazmi42/newrelic-loopback4/LICENSE)

Loopback 4 Instrumentation for the [Node agent](https://github.com/newrelic/node-newrelic)

### Overview

Loopback 4 uses expressjs under the hood and mounts itself as request handler. It is the default handler irrespective of the URI. So understanding the correct API URL becomes difficult. 

### Install

```
npm install newrelic-loopback4
```

### Usage

```js
// index.js
require('newrelic-loopback4')
```

### Supported features

- Correct path 
