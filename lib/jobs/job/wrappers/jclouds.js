'use strict';
var util$890 = require('../../../misc/util.js');
var Instances$891 = require('./jclouds/instances.js');
var JClouds$893 = function (upper$896, obj$897) {
    this.upper = upper$896;
    this.obj = obj$897;
};
JClouds$893.prototype.up = function () {
    return this.upper;
};
JClouds$893.prototype.and = JClouds$893.prototype.up;
module.exports = JClouds$893;
JClouds$893.prototype[util$890.camelize('single-use')] = function (value$898) {
    return util$890.primitiveAccessor.apply(this, [
        'single-use',
        value$898
    ]);
};
JClouds$893.prototype[util$890.camelize('instances')] = function (value$899) {
    return util$890.customArrayAccessor.apply(this, [
        'instances',
        Instances$891,
        value$899
    ]);
};