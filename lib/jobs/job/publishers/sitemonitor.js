'use strict';
var util$915 = require('../../../misc/util.js');
var Site$916 = require('./sitemonitor/site.js');
var SiteMonitor$918 = function (upper$920, obj$921) {
    this.upper = upper$920;
    this.obj = obj$921;
};
SiteMonitor$918.prototype.up = function () {
    return this.upper;
};
SiteMonitor$918.prototype.and = SiteMonitor$918.prototype.up;
module.exports = SiteMonitor$918;
SiteMonitor$918.prototype[util$915.camelize('sites')] = function (value$922) {
    return util$915.objectArrayAccessor.apply(this, [
        'sites',
        Site$916,
        value$922
    ]);
};