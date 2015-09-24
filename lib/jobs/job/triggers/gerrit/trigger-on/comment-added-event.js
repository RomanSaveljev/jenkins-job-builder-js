'use strict';
var util$915 = require('../../../../../misc/util.js');
var CommentAddedEvent$917 = function (upper$920, obj$921) {
    this.upper = upper$920;
    this.obj = obj$921;
};
CommentAddedEvent$917.prototype.up = function () {
    return this.upper;
};
CommentAddedEvent$917.prototype.and = CommentAddedEvent$917.prototype.up;
module.exports = CommentAddedEvent$917;
CommentAddedEvent$917.prototype[util$915.camelize('approval-category')] = function (value$922) {
    return util$915.primitiveAccessor.apply(this, [
        'approval-category',
        value$922
    ]);
};
CommentAddedEvent$917.prototype[util$915.camelize('approval-value')] = function (value$923) {
    return util$915.primitiveAccessor.apply(this, [
        'approval-value',
        value$923
    ]);
};