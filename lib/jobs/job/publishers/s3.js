'use strict';
var util$890 = require('../../../misc/util.js');
var Entry$891 = require('./s3/entry.js');
var MetadataTag$892 = require('./s3/metadata-tag.js');
var S3$894 = function (upper$898, obj$899) {
    this.upper = upper$898;
    this.obj = obj$899;
};
S3$894.prototype.up = function () {
    return this.upper;
};
S3$894.prototype.and = S3$894.prototype.up;
module.exports = S3$894;
S3$894.prototype[util$890.camelize('s3-profile')] = function (value$900) {
    return util$890.primitiveAccessor.apply(this, [
        's3-profile',
        value$900
    ]);
};
S3$894.prototype[util$890.camelize('entries')] = function (value$901) {
    return util$890.objectArrayAccessor.apply(this, [
        'entries',
        Entry$891,
        value$901
    ]);
};
S3$894.prototype[util$890.camelize('metadata-tags')] = function (value$902) {
    return util$890.objectAccessor.apply(this, [
        'metadata-tags',
        MetadataTag$892,
        value$902
    ]);
};