'use strict';
module.exports = function initialize(shim, loopback) {
    shim.setFramework('Loopback-4');
    shim.wrap(loopback.HttpHandler.prototype, '_handleRequest', wrapHandleRequest);
}

function wrapHandleRequest(shim, original) {
    return async function wrappedHandleRequest(request, response) {
        const route = this.findRoute(request)
        // try to get the actual route path from Loopback if not fallback to the
        // IncomingMessage path
        const uri = route && route.path || request._parsedUrl.pathname
        shim.setTransactionUri(uri)
        return await original.apply(this, arguments)
    }
}
