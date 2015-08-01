'use strict';
var util$890 = require('../../../misc/util.js');
var PostBuildScript$892 = function (upper$899, obj$900) {
    this.upper = upper$899;
    this.obj = obj$900;
};
PostBuildScript$892.prototype.up = function () {
    return this.upper;
};
PostBuildScript$892.prototype.and = PostBuildScript$892.prototype.up;
module.exports = PostBuildScript$892;
PostBuildScript$892.prototype[util$890.camelize('generic-script')] = function (value$901) {
    return util$890.primitiveArrayAccessor.apply(this, [
        'generic-script',
        value$901
    ]);
};
PostBuildScript$892.prototype[util$890.camelize('groovy-script')] = function (value$902) {
    return util$890.primitiveArrayAccessor.apply(this, [
        'groovy-script',
        value$902
    ]);
};
PostBuildScript$892.prototype[util$890.camelize('groovy')] = function (value$903) {
    return util$890.primitiveArrayAccessor.apply(this, [
        'groovy',
        value$903
    ]);
};
PostBuildScript$892.prototype.builders = function (value$904) {
    if (value$904 === undefined) {
        var // this is to avoid circular dependencies
        Builders$905 = require('../builders.js');
        // always create a fresh array to enforce declarative code style
        this[outer][inner] = [];
        return new Builders$905(this, this[outer][inner]);
    } else {
        throw 'TODO: setter is not implemented';
    }
};
PostBuildScript$892.prototype[util$890.camelize('script-only-if-succeeded')] = function (value$906) {
    return util$890.primitiveAccessor.apply(this, [
        'script-only-if-succeeded',
        value$906
    ]);
};
PostBuildScript$892.prototype[util$890.camelize('script-only-if-failed')] = function (value$907) {
    return util$890.primitiveAccessor.apply(this, [
        'script-only-if-failed',
        value$907
    ]);
};
PostBuildScript$892.prototype[util$890.camelize('execute-on')] = function (value$908) {
    return util$890.primitiveAccessor.apply(this, [
        'execute-on',
        value$908
    ]);
};