'use strict';
var util$890 = require('../../../../misc/util.js');
var Display$891 = require('./graph/display.js');
var Graph$893 = function (upper$896, obj$897) {
    this.upper = upper$896;
    this.obj = obj$897;
};
Graph$893.prototype.up = function () {
    return this.upper;
};
Graph$893.prototype.and = Graph$893.prototype.up;
module.exports = Graph$893;
Graph$893.prototype[util$890.camelize('xysize')] = function (value$898) {
    return util$890.primitiveArrayAccessor.apply(this, [
        'xysize',
        value$898
    ]);
};
Graph$893.prototype[util$890.camelize('display')] = function (value$899) {
    return util$890.objectAccessor.apply(this, [
        'display',
        Display$891,
        value$899
    ]);
};