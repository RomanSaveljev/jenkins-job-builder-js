'use strict';
var util$890 = require('../../../misc/util.js');
var Redis$891 = require('./logstash/redis.js');
var LogStash$893 = function (upper$896, obj$897) {
    this.upper = upper$896;
    this.obj = obj$897;
};
LogStash$893.prototype.up = function () {
    return this.upper;
};
LogStash$893.prototype.and = LogStash$893.prototype.up;
module.exports = LogStash$893;
LogStash$893.prototype[util$890.camelize('use-redis')] = function (value$898) {
    return util$890.primitiveAccessor.apply(this, [
        'use-redis',
        value$898
    ]);
};
LogStash$893.prototype[util$890.camelize('redis')] = function (value$899) {
    return util$890.objectAccessor.apply(this, [
        'redis',
        Redis$891,
        value$899
    ]);
};