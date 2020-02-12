'use strict';
module.exports = function initialize(shim, loopback) {
    shim.setFramework('Loopback-4');
    shim.wrap(loopback.HttpHandler.prototype, '_handleRequest', wrapHandleRequest);
}

function wrapHandleRequest(shim, original) {
    return async function wrappedHandleRequest(request, response) {
        shim.setTransactionUri(request._parsedUrl.pathname);
        return await original.apply(this, arguments)
    }
}