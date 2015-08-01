'use strict';
var util$890 = require('../../../misc/util.js');
var AggregateTests$892 = function (upper$894, obj$895) {
    this.upper = upper$894;
    this.obj = obj$895;
};
AggregateTests$892.prototype.up = function () {
    return this.upper;
};
AggregateTests$892.prototype.and = AggregateTests$892.prototype.up;
module.exports = AggregateTests$892;
AggregateTests$892.prototype[util$890.camelize('include-failed-builds')] = function (value$896) {
    return util$890.primitiveAccessor.apply(this, [
        'include-failed-builds',
        value$896
    ]);
};