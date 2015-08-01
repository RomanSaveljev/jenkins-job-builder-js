'use strict';
var util$890 = require('../../../misc/util.js');
var File$891 = require('./scp/file.js');
var Scp$893 = function (upper$896, obj$897) {
    this.upper = upper$896;
    this.obj = obj$897;
};
Scp$893.prototype.up = function () {
    return this.upper;
};
Scp$893.prototype.and = Scp$893.prototype.up;
module.exports = Scp$893;
Scp$893.prototype[util$890.camelize('site')] = function (value$898) {
    return util$890.primitiveAccessor.apply(this, [
        'site',
        value$898
    ]);
};
Scp$893.prototype[util$890.camelize('files')] = function (value$899) {
    return util$890.objectArrayAccessor.apply(this, [
        'files',
        File$891,
        value$899
    ]);
};