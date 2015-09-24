'use strict';
var util$915 = require('../../../misc/util.js');
var Url$916 = require('./pollurl/url.js');
var PollUrl$918 = function (upper$922, obj$923) {
    this.upper = upper$922;
    this.obj = obj$923;
};
PollUrl$918.prototype.up = function () {
    return this.upper;
};
PollUrl$918.prototype.and = PollUrl$918.prototype.up;
module.exports = PollUrl$918;
PollUrl$918.prototype[util$915.camelize('cron')] = function (value$924) {
    return util$915.primitiveAccessor.apply(this, [
        'cron',
        value$924
    ]);
};
PollUrl$918.prototype[util$915.camelize('polling-node')] = function (value$925) {
    return util$915.primitiveAccessor.apply(this, [
        'polling-node',
        value$925
    ]);
};
PollUrl$918.prototype[util$915.camelize('urls')] = function (value$926) {
    return util$915.objectArrayAccessor.apply(this, [
        'urls',
        Url$916,
        value$926
    ]);
};