'use strict';
var util$890 = require('../../../misc/util.js');
var Xvnc$892 = function (upper$895, obj$896) {
    this.upper = upper$895;
    this.obj = obj$896;
};
Xvnc$892.prototype.up = function () {
    return this.upper;
};
Xvnc$892.prototype.and = Xvnc$892.prototype.up;
module.exports = Xvnc$892;
Xvnc$892.prototype[util$890.camelize('screenshot')] = function (value$897) {
    return util$890.primitiveAccessor.apply(this, [
        'screenshot',
        value$897
    ]);
};
Xvnc$892.prototype[util$890.camelize('xauthority')] = function (value$898) {
    return util$890.primitiveAccessor.apply(this, [
        'xauthority',
        value$898
    ]);
};