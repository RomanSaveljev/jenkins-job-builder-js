'use strict';
var util$940 = require('../../../misc/util.js');
var PostBuildScript$942 = function (upper$949, obj$950) {
    this.upper = upper$949;
    this.obj = obj$950;
};
PostBuildScript$942.prototype.up = function () {
    return this.upper;
};
PostBuildScript$942.prototype.and = PostBuildScript$942.prototype.up;
module.exports = PostBuildScript$942;
PostBuildScript$942.prototype[util$940.camelize('generic-script')] = function (value$951) {
    return util$940.primitiveArrayAccessor.apply(this, [
        'generic-script',
        value$951
    ]);
};
PostBuildScript$942.prototype[util$940.camelize('groovy-script')] = function (value$952) {
    return util$940.primitiveArrayAccessor.apply(this, [
        'groovy-script',
        value$952
    ]);
};
PostBuildScript$942.prototype[util$940.camelize('groovy')] = function (value$953) {
    return util$940.primitiveArrayAccessor.apply(this, [
        'groovy',
        value$953
    ]);
};
PostBuildScript$942.prototype.builders = function (value$954) {
    if (value$954 === undefined) {
        var // this is to avoid circular dependencies
        Builders$955 = require('../builders.js');
        // always create a fresh array to enforce declarative code style
        this.obj.builders = [];
        return new Builders$955(this, this.obj.builders);
    } else {
        throw 'TODO: setter is not implemented';
    }
};
PostBuildScript$942.prototype[util$940.camelize('script-only-if-succeeded')] = function (value$956) {
    return util$940.primitiveAccessor.apply(this, [
        'script-only-if-succeeded',
        value$956
    ]);
};
PostBuildScript$942.prototype[util$940.camelize('script-only-if-failed')] = function (value$957) {
    return util$940.primitiveAccessor.apply(this, [
        'script-only-if-failed',
        value$957
    ]);
};
PostBuildScript$942.prototype[util$940.camelize('execute-on')] = function (value$958) {
    return util$940.primitiveAccessor.apply(this, [
        'execute-on',
        value$958
    ]);
};