'use strict';
var util$890 = require('../../../misc/util.js');
var ConfigFile$891 = require('./config-file-provider/config-file.js');
var ConfigFileProvider$893 = function (upper$895, obj$896) {
    this.upper = upper$895;
    this.obj = obj$896;
};
ConfigFileProvider$893.prototype.up = function () {
    return this.upper;
};
ConfigFileProvider$893.prototype.and = ConfigFileProvider$893.prototype.up;
module.exports = ConfigFileProvider$893;
ConfigFileProvider$893.prototype[util$890.camelize('files')] = function (value$897) {
    return util$890.objectArrayAccessor.apply(this, [
        'files',
        ConfigFile$891,
        value$897
    ]);
};