'use strict';
var util$890 = require('../../../misc/util.js');
var Site$891 = require('./sitemonitor/site.js');
var SiteMonitor$893 = function (upper$895, obj$896) {
    this.upper = upper$895;
    this.obj = obj$896;
};
SiteMonitor$893.prototype.up = function () {
    return this.upper;
};
SiteMonitor$893.prototype.and = SiteMonitor$893.prototype.up;
module.exports = SiteMonitor$893;
SiteMonitor$893.prototype[util$890.camelize('sites')] = function (value$897) {
    return util$890.objectArrayAccessor.apply(this, [
        'sites',
        Site$891,
        value$897
    ]);
};