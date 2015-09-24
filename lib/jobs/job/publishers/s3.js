'use strict';
var util$915 = require('../../../misc/util.js');
var Entry$916 = require('./s3/entry.js');
var MetadataTag$917 = require('./s3/metadata-tag.js');
var S3$919 = function (upper$923, obj$924) {
    this.upper = upper$923;
    this.obj = obj$924;
};
S3$919.prototype.up = function () {
    return this.upper;
};
S3$919.prototype.and = S3$919.prototype.up;
module.exports = S3$919;
S3$919.prototype[util$915.camelize('s3-profile')] = function (value$925) {
    return util$915.primitiveAccessor.apply(this, [
        's3-profile',
        value$925
    ]);
};
S3$919.prototype[util$915.camelize('entries')] = function (value$926) {
    return util$915.objectArrayAccessor.apply(this, [
        'entries',
        Entry$916,
        value$926
    ]);
};
S3$919.prototype[util$915.camelize('metadata-tags')] = function (value$927) {
    return util$915.objectArrayAccessor.apply(this, [
        'metadata-tags',
        MetadataTag$917,
        value$927
    ]);
};