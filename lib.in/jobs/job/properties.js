"use strict";

var util = require('../../misc/util.js');
var Authorization = require('./properties/authorization.js');
var BatchTasks = require('./properties/batch-tasks.js');
var BuildBlocker = require('./properties/build-blocker.js');
var BuildsChainFingerprinter = require('./properties/builds-chain-fingerprinter.js');
var CopyArtifact = require('./properties/copyartifact.js');
var DeliveryPipeline = require('./properties/delivery-pipeline.js');
var Github = require('./properties/github.js');
var HeavyJob = require('./properties/heavy-job.js');
var Inject = require('./properties/inject.js');
var LeastLoad = require('./properties/least-load.js');
var Ownership = require('./properties/ownership.js');
var PrioritySorter = require('./properties/priority-sorter.js');
var PromotedBuild = require('./properties/promoted-build.js');
var SlaveUtilization = require('./properties/slave-utilization.js');
var Throttle = require('./properties/throttle.js');
var ZeromqEvent = require('../../misc/empty-proxy.js');
var Rebuild = require('./properties/rebuild.js');

uppableArrayProxy(Properties)
keyedObjectElement(util, Properties, 'authorization', Authorization)
keyedArrayElement(util, Properties, 'batch-tasks', BatchTasks)
keyedObjectElement(util, Properties, 'build-blocker', BuildBlocker)
keyedObjectElement(util, Properties, 'builds-chain-fingerprinter', BuildsChainFingerprinter)
keyedObjectElement(util, Properties, 'copyartifact', CopyArtifact)
keyedObjectElement(util, Properties, 'delivery-pipeline', DeliveryPipeline)
keyedObjectElement(util, Properties, 'github', Github)
keyedObjectElement(util, Properties, 'heavy-job', HeavyJob)
keyedObjectElement(util, Properties, 'inject', Inject)
keyedObjectElement(util, Properties, 'least-load', LeastLoad)
keyedObjectElement(util, Properties, 'ownership', Ownership)
keyedObjectElement(util, Properties, 'priority-sorter', PrioritySorter)
keyedObjectElement(util, Properties, 'promoted-build', PromotedBuild)
keyedObjectElement(util, Properties, 'slave-utilization', SlaveUtilization)
keyedObjectElement(util, Properties, 'throttle', Throttle)
keyedObjectElement(util, Properties, 'zeromq-event', ZeromqEvent)
keyedObjectElement(util, Properties, 'rebuild', Rebuild)
