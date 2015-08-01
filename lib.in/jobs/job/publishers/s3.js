"use strict";

var util = require('../../../misc/util.js');
var Entry = require('./s3/entry.js');
var MetadataTag = require('./s3/metadata-tag.js');

var S3 = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(S3.prototype, 'upper');
S3.prototype.s3Profile = util.generatePrimitiveAccessor('obj', 's3-profile');
S3.prototype.entries = util.generateObjectArrayAccessor('obj', 'entries', Entry);
S3.prototype.metadataTags = util.generateObjectAccessor('obj', 'metadata-tags', MetadataTag);

module.exports = S3;
