"use strict";

var util = require('../../../../misc/util.js');

var Entry = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(Entry.prototype, 'upper');
Entry.prototype.destinationBucket = util.generatePrimitiveAccessor('obj', 'destination-bucket');
Entry.prototype.sourceFiles = util.generatePrimitiveAccessor('obj', 'source-files');
Entry.prototype.storageClass = util.generatePrimitiveAccessor('obj', 'storage-class');
Entry.prototype.bucketRegion = util.generatePrimitiveAccessor('obj', 'bucket-region');
Entry.prototype.uploadOnFailure = util.generatePrimitiveAccessor('obj', 'upload-on-failure');
Entry.prototype.uploadFromSlave = util.generatePrimitiveAccessor('obj', 'upload-from-slave');
Entry.prototype.managedArtifacts = util.generatePrimitiveAccessor('obj', 'managed-artifacts');

module.exports = Entry;
