'use strict';
var util$915 = require('../../../misc/util.js');
var ConfigFile$916 = require('./config-file-provider/config-file.js');
var ConfigFileProvider$918 = function (upper$920, obj$921) {
    this.upper = upper$920;
    this.obj = obj$921;
};
ConfigFileProvider$918.prototype.up = function () {
    return this.upper;
};
ConfigFileProvider$918.prototype.and = ConfigFileProvider$918.prototype.up;
module.exports = ConfigFileProvider$918;
ConfigFileProvider$918.prototype[util$915.camelize('files')] = function (value$922) {
    return util$915.objectArrayAccessor.apply(this, [
        'files',
        ConfigFile$916,
        value$922
    ]);
};