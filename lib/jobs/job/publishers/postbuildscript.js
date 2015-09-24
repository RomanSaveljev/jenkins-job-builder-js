'use strict';
var util$915 = require('../../../misc/util.js');
var PostBuildScript$917 = function (upper$924, obj$925) {
    this.upper = upper$924;
    this.obj = obj$925;
};
PostBuildScript$917.prototype.up = function () {
    return this.upper;
};
PostBuildScript$917.prototype.and = PostBuildScript$917.prototype.up;
module.exports = PostBuildScript$917;
PostBuildScript$917.prototype[util$915.camelize('generic-script')] = function (value$926) {
    return util$915.primitiveArrayAccessor.apply(this, [
        'generic-script',
        value$926
    ]);
};
PostBuildScript$917.prototype[util$915.camelize('groovy-script')] = function (value$927) {
    return util$915.primitiveArrayAccessor.apply(this, [
        'groovy-script',
        value$927
    ]);
};
PostBuildScript$917.prototype[util$915.camelize('groovy')] = function (value$928) {
    return util$915.primitiveArrayAccessor.apply(this, [
        'groovy',
        value$928
    ]);
};
PostBuildScript$917.prototype.builders = function (value$929) {
    if (value$929 === undefined) {
        var // this is to avoid circular dependencies
        Builders$930 = require('../builders.js');
        // always create a fresh array to enforce declarative code style
        this.obj.builders = [];
        return new Builders$930(this, this.obj.builders);
    } else {
        throw 'TODO: setter is not implemented';
    }
};
PostBuildScript$917.prototype[util$915.camelize('script-only-if-succeeded')] = function (value$931) {
    return util$915.primitiveAccessor.apply(this, [
        'script-only-if-succeeded',
        value$931
    ]);
};
PostBuildScript$917.prototype[util$915.camelize('script-only-if-failed')] = function (value$932) {
    return util$915.primitiveAccessor.apply(this, [
        'script-only-if-failed',
        value$932
    ]);
};
PostBuildScript$917.prototype[util$915.camelize('execute-on')] = function (value$933) {
    return util$915.primitiveAccessor.apply(this, [
        'execute-on',
        value$933
    ]);
};