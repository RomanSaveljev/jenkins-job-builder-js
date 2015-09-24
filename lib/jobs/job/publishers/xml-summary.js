'use strict';
var util$915 = require('../../../misc/util.js');
var XmlSummary$917 = function (upper$920, obj$921) {
    this.upper = upper$920;
    this.obj = obj$921;
};
XmlSummary$917.prototype.up = function () {
    return this.upper;
};
XmlSummary$917.prototype.and = XmlSummary$917.prototype.up;
module.exports = XmlSummary$917;
XmlSummary$917.prototype[util$915.camelize('files')] = function (value$922) {
    return util$915.primitiveAccessor.apply(this, [
        'files',
        value$922
    ]);
};
XmlSummary$917.prototype[util$915.camelize('shown-on-project-page')] = function (value$923) {
    return util$915.primitiveAccessor.apply(this, [
        'shown-on-project-page',
        value$923
    ]);
};