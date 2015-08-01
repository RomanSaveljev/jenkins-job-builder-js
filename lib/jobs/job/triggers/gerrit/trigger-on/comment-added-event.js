'use strict';
var util$890 = require('../../../../../misc/util.js');
var CommentAddedEvent$892 = function (upper$895, obj$896) {
    this.upper = upper$895;
    this.obj = obj$896;
};
CommentAddedEvent$892.prototype.up = function () {
    return this.upper;
};
CommentAddedEvent$892.prototype.and = CommentAddedEvent$892.prototype.up;
module.exports = CommentAddedEvent$892;
CommentAddedEvent$892.prototype[util$890.camelize('approval-category')] = function (value$897) {
    return util$890.primitiveAccessor.apply(this, [
        'approval-category',
        value$897
    ]);
};
CommentAddedEvent$892.prototype[util$890.camelize('approval-value')] = function (value$898) {
    return util$890.primitiveAccessor.apply(this, [
        'approval-value',
        value$898
    ]);
};