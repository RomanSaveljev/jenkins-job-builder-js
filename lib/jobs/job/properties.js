"use strict";

var util = require('./util.js');
var BatchTasks = require('./properties/batch-tasks.js');
var BuildBlocker = require('./properties/build-blocker.js');
var BuildsChainFingerprinter = require('./properties/builds-chain-fingerprinter.js');
var CopyArtifact = require('./properties/copyartifact.js');
var DeliveryPipeline = require('./properties/delivery-pipeline.js');
var Github = require('./properties/github.js');
var HeavyJob = require('./properties/heavy-job.js');
var Inject = require('./wrappers/inject.js');
var LeastLoad = require('./properties/least-load.js');
var Ownership = require('./properties/ownership.js');
var PrioritySorter = require('./properties/priority-sorter.js');
var PromotedBuild = require('./properties/promoted-build.js');
var SlaveUtilization = require('./properties/slave-utilization.js');
var Throttle = require('./properties/throttle.js');
var ZeromqEvent = require('./proxies/empty-proxy.js');

var Properties = function(upper, array) {
  this.upper = upper;
  this.array = array;
};
util.makeUppable(Properties.prototype, 'upper');
Properties.prototype.authorization = util.generateToDomember('TODO: need to decide on adding user defined properties');
Properties.prototype.batchTasks = util.generateKeyedObjectElementAccessor('array', 'batch-tasks', BatchTasks);
Properties.prototype.buildBlocker = util.generateKeyedObjectElementAccessor('array', 'build-blocker', BuildBlocker);
Properties.prototype.buildsChainFingerprinter = util.generateKeyedObjectElementAccessor('array', 'builds-chain-fingerprinter', BuildsChainFingerprinter);
Properties.prototype.copyArtifact = util.generateKeyedObjectElementAccessor('array', 'copyartifact', CopyArtifact);
Properties.prototype.deliveryPipeline = util.generateKeyedObjectElementAccessor('array', 'delivery-pipeline', DeliveryPipeline);
Properties.prototype.github = util.generateKeyedObjectElementAccessor('array', 'github', Github);
Properties.prototype.heavyJob = util.generateKeyedObjectElementAccessor('array', 'heavy-job', HeavyJob);
Properties.prototype.inject = util.generateKeyedObjectElementAccessor('array', 'inject', Inject);
Properties.prototype.leastLoad = util.generateKeyedObjectElementAccessor('array', 'least-load', LeastLoad);
Properties.prototype.ownership = util.generateKeyedObjectElementAccessor('array', 'ownership', Ownership);
Properties.prototype.prioritySorter = util.generateKeyedObjectElementAccessor('array', 'priority-sorter', PrioritySorter);
Properties.prototype.promotedBuild = util.generateKeyedObjectElementAccessor('array', 'promoted-build', PromotedBuild);
Properties.prototype.slaveUtilization = util.generateKeyedObjectElementAccessor('array', 'slave-utilization', SlaveUtilization);
Properties.prototype.throttle = util.generateKeyedObjectElementAccessor('array', 'throttle', Throttle);
Properties.prototype.zeromqEvent = util.generateKeyedObjectElementAccessor('array', 'zeromq-event', ZeromqEvent);

module.exports = Properties;
