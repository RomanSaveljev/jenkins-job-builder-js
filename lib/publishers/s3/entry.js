"use strict";

var util = require('../../util.js');

var Entry = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(Entry.prototype, 'upper');
Entry.prototype.destinationBucket = util.generatePrimtiveAccessor('obj', 'destination-bucket');
Entry.prototype.sourceFiles = util.generatePrimtiveAccessor('obj', 'source-files');
Entry.prototype.storageClass = util.generatePrimtiveAccessor('obj', 'storage-class');
Entry.prototype.bucketRegion = util.generatePrimtiveAccessor('obj', 'bucket-region');
Entry.prototype.uploadOnFailure = util.generatePrimtiveAccessor('obj', 'upload-on-failure');
Entry.prototype.uploadFromSlave = util.generatePrimtiveAccessor('obj', 'upload-from-slave');
Entry.prototype.managedArtifacts = util.generatePrimtiveAccessor('obj', 'managed-artifacts');

module.exports = Entry;
