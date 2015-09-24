'use strict';
var util$915 = require('../../../misc/util.js');
var CopyArtifact$917 = function (upper$919, obj$920) {
    this.upper = upper$919;
    this.obj = obj$920;
};
CopyArtifact$917.prototype.up = function () {
    return this.upper;
};
CopyArtifact$917.prototype.and = CopyArtifact$917.prototype.up;
module.exports = CopyArtifact$917;
CopyArtifact$917.prototype[util$915.camelize('projects')] = function (value$921) {
    return util$915.primitiveAccessor.apply(this, [
        'projects',
        value$921
    ]);
};