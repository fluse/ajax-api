/* globals  */

var ajax = require('jquery').ajax;
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

        ajax({
            type: method,
            url: url,
            dataType: this.settings.dataType,
            data: (typeof data === 'object') ? data : {},
            headers: {
                'Authorization': 'Basic ' + this.settings.token
            },
            success: function(response) {
                cb(response.error, response.result);
            },
            error: function(err) {
                cb(err, null);
            }
        });
    }
};

module.exports = window.Api = Api;
