'use strict';
var util$890 = require('../../../misc/util.js');
var XmlSummary$892 = function (upper$895, obj$896) {
    this.upper = upper$895;
    this.obj = obj$896;
};
XmlSummary$892.prototype.up = function () {
    return this.upper;
};
XmlSummary$892.prototype.and = XmlSummary$892.prototype.up;
module.exports = XmlSummary$892;
XmlSummary$892.prototype[util$890.camelize('files')] = function (value$897) {
    return util$890.primitiveAccessor.apply(this, [
        'files',
        value$897
    ]);
};
XmlSummary$892.prototype[util$890.camelize('shown-on-project-page')] = function (value$898) {
    return util$890.primitiveAccessor.apply(this, [
        'shown-on-project-page',
        value$898
    ]);
};