'use strict';
var util$915 = require('../../../../../misc/util.js');
var CommentAddedContainsEvent$917 = function (upper$919, obj$920) {
    this.upper = upper$919;
    this.obj = obj$920;
};
CommentAddedContainsEvent$917.prototype.up = function () {
    return this.upper;
};
CommentAddedContainsEvent$917.prototype.and = CommentAddedContainsEvent$917.prototype.up;
module.exports = CommentAddedContainsEvent$917;
CommentAddedContainsEvent$917.prototype[util$915.camelize('comment-contains-value')] = function (value$921) {
    return util$915.primitiveAccessor.apply(this, [
        'comment-contains-value',
        value$921
    ]);
};