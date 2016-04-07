/* globals  */

var request = require('superagent');
var extend = require('extend');

'use strict';

var Api = function (settings) {

    this.settings = extend({}, {
        token: null,
        version: 'v1',
        baseName: '/api/',
        dataType: 'json'
    }, settings);

    return this.call.bind(this);
};

Api.prototype = {

    call: function (method, url, params, data) {

        // concat url
        url = this.settings.baseName + this.settings.version + url;

        // replace params
        for (var name in params) {
            url = url.replace(':' + name, params[name]);
        }

        // get callback
        var cb = arguments[arguments.length - 1];
        var self = this;

        request(method, url)
            .set('Accept', 'application/json')
            .set('Authorization', 'Basic ' + this.settings.token)
            .send((typeof data === 'object') ? data : {})
            .on('error', function (err) {
                cb(err, null);
            })
            .end(function (err, res) {
                if (err) {
                    return cb(err, null);
                }
                cb(res.body.error, res.body.result);
            });
    }
};
if (typeof window !== 'undefined') window.Api = Api;
module.exports = Api;
