'use strict';

const tap = require('tap');
const utils = require('@newrelic/test-utilities');

utils.tap;

tap.test('Loopback-4 instrumentation', function (t) {
    let helper = utils.TestAgent.makeInstrumented()
    helper.registerInstrumentation({
        moduleName: 'Loopback-4',
        type: 'web-framework',
        onRequire: require('../../lib/rest-instrumentation')
    });
    const RestLoopback = require('@loopback/rest');

    const wrapped = ['_handleRequest'];

    wrapped.forEach(function (method) {
        t.ok(RestLoopback.HttpHandler.prototype[method], method + ' is wrapped, as expected');
    });

    helper && helper.unload()
    t.end()
})