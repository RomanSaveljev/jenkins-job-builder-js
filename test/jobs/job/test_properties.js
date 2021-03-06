var should = require('should');
var Properties = require('../../../lib/jobs/job/properties.js');
var testlib = require('../../testlib.js');
var Authorization = require('../../../lib/jobs/job/properties/authorization.js');
var BatchTasks = require('../../../lib/jobs/job/properties/batch-tasks.js');
var BuildBlocker = require('../../../lib/jobs/job/properties/build-blocker.js');
var BuildsChainFingerprinter = require('../../../lib/jobs/job/properties/builds-chain-fingerprinter.js');
var CopyArtifact = require('../../../lib/jobs/job/properties/copyartifact.js');
var DeliveryPipeline = require('../../../lib/jobs/job/properties/delivery-pipeline.js');
var Github = require('../../../lib/jobs/job/properties/github.js');
var HeavyJob = require('../../../lib/jobs/job/properties/heavy-job.js');
var Inject = require('../../../lib/jobs/job/properties/inject.js');
var LeastLoad = require('../../../lib/jobs/job/properties/least-load.js');
var Ownership = require('../../../lib/jobs/job/properties/ownership.js');
var PrioritySorter = require('../../../lib/jobs/job/properties/priority-sorter.js');
var PromotedBuild = require('../../../lib/jobs/job/properties/promoted-build.js');
var SlaveUtilization = require('../../../lib/jobs/job/properties/slave-utilization.js');
var Throttle = require('../../../lib/jobs/job/properties/throttle.js');
var Rebuild = require('../../../lib/jobs/job/properties/rebuild.js');
var EmptyProxy = require('../../../lib/misc/empty-proxy.js');

describe('Properties', function() {
  describe('constructor', testlib.describeProxyConstructor(Properties));
  describe('object', testlib.describeProxyUppableAndable(Properties));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Properties, 'authorization', Authorization));
  //describe('properties', testlib.describeProxyKeyedArrayProperty(Properties, 'batch-tasks', BatchTasks));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Properties, 'build-blocker', BuildBlocker));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Properties, 'builds-chain-fingerprinter', BuildsChainFingerprinter));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Properties, 'copyartifact', CopyArtifact));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Properties, 'delivery-pipeline', DeliveryPipeline));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Properties, 'github', Github));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Properties, 'heavy-job', HeavyJob));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Properties, 'inject', Inject));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Properties, 'least-load', LeastLoad));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Properties, 'ownership', Ownership));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Properties, 'priority-sorter', PrioritySorter));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Properties, 'promoted-build', PromotedBuild));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Properties, 'slave-utilization', SlaveUtilization));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Properties, 'throttle', Throttle));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Properties, 'zeromq-event', EmptyProxy));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Properties, 'rebuild', Rebuild));
});
