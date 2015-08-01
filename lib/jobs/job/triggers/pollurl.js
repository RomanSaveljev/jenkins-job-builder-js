'use strict';
var util$890 = require('../../../misc/util.js');
var Url$891 = require('./pollurl/url.js');
var PollUrl$893 = function (upper$897, obj$898) {
    this.upper = upper$897;
    this.obj = obj$898;
};
PollUrl$893.prototype.up = function () {
    return this.upper;
};
PollUrl$893.prototype.and = PollUrl$893.prototype.up;
module.exports = PollUrl$893;
PollUrl$893.prototype[util$890.camelize('cron')] = function (value$899) {
    return util$890.primitiveAccessor.apply(this, [
        'cron',
        value$899
    ]);
};
PollUrl$893.prototype[util$890.camelize('polling-node')] = function (value$900) {
    return util$890.primitiveAccessor.apply(this, [
        'polling-node',
        value$900
    ]);
};
PollUrl$893.prototype[util$890.camelize('urls')] = function (value$901) {
    return util$890.objectArrayAccessor.apply(this, [
        'urls',
        Url$891,
        value$901
    ]);
};