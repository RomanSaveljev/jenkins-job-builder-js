'use strict';
var util$890 = require('../../../../../misc/util.js');
var CommentAddedContainsEvent$892 = function (upper$894, obj$895) {
    this.upper = upper$894;
    this.obj = obj$895;
};
CommentAddedContainsEvent$892.prototype.up = function () {
    return this.upper;
};
CommentAddedContainsEvent$892.prototype.and = CommentAddedContainsEvent$892.prototype.up;
module.exports = CommentAddedContainsEvent$892;
CommentAddedContainsEvent$892.prototype[util$890.camelize('comment-contains-value')] = function (value$896) {
    return util$890.primitiveAccessor.apply(this, [
        'comment-contains-value',
        value$896
    ]);
};