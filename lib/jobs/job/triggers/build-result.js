'use strict';
var util$890 = require('../../../misc/util.js');
var Group$891 = require('./build-result/group.js');
var BuildResult$893 = function (upper$897, obj$898) {
    this.upper = upper$897;
    this.obj = obj$898;
};
BuildResult$893.prototype.up = function () {
    return this.upper;
};
BuildResult$893.prototype.and = BuildResult$893.prototype.up;
module.exports = BuildResult$893;
BuildResult$893.prototype[util$890.camelize('groups')] = function (value$899) {
    return util$890.objectArrayAccessor.apply(this, [
        'groups',
        Group$891,
        value$899
    ]);
};
BuildResult$893.prototype[util$890.camelize('combine')] = function (value$900) {
    return util$890.primitiveAccessor.apply(this, [
        'combine',
        value$900
    ]);
};
BuildResult$893.prototype[util$890.camelize('cron')] = function (value$901) {
    return util$890.primitiveAccessor.apply(this, [
        'cron',
        value$901
    ]);
};