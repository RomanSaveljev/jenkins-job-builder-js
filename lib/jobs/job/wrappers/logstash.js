'use strict';
var util$915 = require('../../../misc/util.js');
var Redis$916 = require('./logstash/redis.js');
var LogStash$918 = function (upper$921, obj$922) {
    this.upper = upper$921;
    this.obj = obj$922;
};
LogStash$918.prototype.up = function () {
    return this.upper;
};
LogStash$918.prototype.and = LogStash$918.prototype.up;
module.exports = LogStash$918;
LogStash$918.prototype[util$915.camelize('use-redis')] = function (value$923) {
    return util$915.primitiveAccessor.apply(this, [
        'use-redis',
        value$923
    ]);
};
LogStash$918.prototype[util$915.camelize('redis')] = function (value$924) {
    return util$915.objectAccessor.apply(this, [
        'redis',
        Redis$916,
        value$924
    ]);
};