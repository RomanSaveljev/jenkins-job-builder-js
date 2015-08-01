"use strict";

var util = require('../misc/util.js');
var Wrappers = require('./wrappers.js');
var Builders = require('./builders.js');
var HipChat = require('./hipchat.js');
var Maven = require('./maven.js');
var ExecutionStrategy = require('./execution-strategy.js');
var Axes = require('./axes.js');
var Metadata = require('./metadata.js');
var Notifications = require('./notifications.js');
var Parameters = require('./parameters.js');
var Properties = require('./properties.js');
var Publishers = require('./publishers.js');
var Reportes = require('./reporters.js');
var Scm = require('./scm.js');
var Triggers = require('./triggers.js');

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
