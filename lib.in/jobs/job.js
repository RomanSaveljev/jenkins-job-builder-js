"use strict";

var util = require('../misc/util.js');
var Wrappers = require('./job/wrappers.js');
var Builders = require('./job/builders.js');
var HipChat = require('./job/hipchat.js');
var Maven = require('./job/maven.js');
var ExecutionStrategy = require('./job/execution-strategy.js');
var Axes = require('./job/axes.js');
var Metadata = require('./job/metadata.js');
var Notifications = require('./job/notifications.js');
var Parameters = require('./job/parameters.js');
var Properties = require('./job/properties.js');
var Publishers = require('./job/publishers.js');
var Reporters = require('./job/reporters.js');
var Scm = require('./job/scm.js');
var Triggers = require('./job/triggers.js');

uppableObjectProxy(Job)
Job.prototype.clone = function() {
  var job = new Job();
  job.job = fancyDeepClone(this.job);
  return job;
}
primitive(util, Job, 'name')
primitive(util, Job, 'description')
primitive(util, Job, 'node')
primitive(util, Job, 'project-type')
primitive(util, Job, 'dsl')
primitive(util, Job, 'needs-workspace')
primitive(util, Job, 'dsl-file')
object(util, Job, 'maven', Maven)
customArray(util, Job, 'wrappers', Wrappers)
customArray(util, Job, 'builders', Builders)
object(util, Job, 'hipchat', HipChat)
object(util, Job, 'execution-strategy', ExecutionStrategy)
customArray(util, Job, 'axes', Axes)
customArray(util, Job, 'metadata', Metadata)
customArray(util, Job, 'notifications', Notifications)
customArray(util, Job, 'parameters', Parameters)
customArray(util, Job, 'properties', Properties)
customArray(util, Job, 'publishers', Publishers)
customArray(util, Job, 'reporters', Reporters)
customArray(util, Job, 'scm', Scm)
customArray(util, Job, 'triggers', Triggers)
