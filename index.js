'use strict';
const newrelic = require('newrelic');
newrelic.instrumentWebframework('@loopback/rest', require('./lib/rest-instrumentation'));