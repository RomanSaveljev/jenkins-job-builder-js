"use strict";

var util = require('../util.js');
var TriggerOn = require('./gerrit/trigger-on.js');
var Project = require('./gerrit/project.js');
var SkipVote = require('./gerrit/skip-vote.js');

var Gerrit = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(Gerrit.prototype, 'upper');
Gerrit.prototype.triggerOn = util.generateCustomArrayAccessor('obj', 'trigger-on', TriggerOn);
Gerrit.prototype.overrideVotes = util.generatePrimitiveAccessor('obj', 'override-votes');
Gerrit.prototype.gerritBuildStartedVerifiedValue = util.generatePrimitiveAccessor('obj', 'gerrit-build-started-verified-value');
Gerrit.prototype.gerritBuildSuccessfulVerifiedValue = util.generatePrimitiveAccessor('obj', 'gerrit-build-successful-verified-value');
Gerrit.prototype.gerritBuildFailedVerifiedValue = util.generatePrimitiveAccessor('obj', 'gerrit-build-failed-verified-value');
Gerrit.prototype.gerritBuildUnstableVerifiedValue = util.generatePrimitiveAccessor('obj', 'gerrit-build-unstable-verified-value');
Gerrit.prototype.gerritBuildNotbuiltVerifiedValue = util.generatePrimitiveAccessor('obj', 'gerrit-build-notbuilt-verified-value');
Gerrit.prototype.gerritBuildStartedCodereviewValue = util.generatePrimitiveAccessor('obj', 'gerrit-build-started-codereview-value');
Gerrit.prototype.gerritBuildSuccessfulCodereviewValue = util.generatePrimitiveAccessor('obj', 'gerrit-build-successful-codereview-value');
Gerrit.prototype.gerritBuildFailedCodereviewValue = util.generatePrimitiveAccessor('obj', 'gerrit-build-failed-codereview-value');
Gerrit.prototype.gerritBuildUnstableCodereviewValue = util.generatePrimitiveAccessor('obj', 'gerrit-build-unstable-codereview-value');
Gerrit.prototype.gerritBuildNotbuiltCodereviewValue = util.generatePrimitiveAccessor('obj', 'gerrit-build-notbuilt-codereview-value');
Gerrit.prototype.failureMessage = util.generatePrimitiveAccessor('obj', 'failure-message');
Gerrit.prototype.successfulMessage = util.generatePrimitiveAccessor('obj', 'successful-message');
Gerrit.prototype.unstableMessage = util.generatePrimitiveAccessor('obj', 'unstable-message');
Gerrit.prototype.notbuiltMessage = util.generatePrimitiveAccessor('obj', 'notbuilt-message');
Gerrit.prototype.failureMessageFile = util.generatePrimitiveAccessor('obj', 'failure-message-file');
Gerrit.prototype.projects = util.generateObjectArrayAccessor('obj', 'projects', Project);
Gerrit.prototype.skipVote = util.generateObjectAccessor('obj', 'skip-vote', SkipVote);
Gerrit.prototype.silent = util.generatePrimitiveAccessor('obj', 'silent');
Gerrit.prototype.silentStart = util.generatePrimitiveAccessor('obj', 'silent-start');
Gerrit.prototype.escapeQuotes = util.generatePrimitiveAccessor('obj', 'escape-quotes');
Gerrit.prototype.noNameAndEmail = util.generatePrimitiveAccessor('obj', 'no-name-and-email');
Gerrit.prototype.readableMessage = util.generatePrimitiveAccessor('obj', 'readable-message');
Gerrit.prototype.dependencyJobs = util.generatePrimitiveAccessor('obj', 'dependency-jobs');
Gerrit.prototype.notificationLevel = util.generatePrimitiveAccessor('obj', 'notification-level');
Gerrit.prototype.dynamicTriggerEnabled = util.generatePrimitiveAccessor('obj', 'dynamic-trigger-enabled');
Gerrit.prototype.dynamicTriggerUrl = util.generatePrimitiveAccessor('obj', 'dynamic-trigger-url');
Gerrit.prototype.triggerForUnreviewedPatches = util.generatePrimitiveAccessor('obj', 'trigger-for-unreviewed-patches');
Gerrit.prototype.customUrl = util.generatePrimitiveAccessor('obj', 'custom-url');
Gerrit.prototype.serverName = util.generatePrimitiveAccessor('obj', 'server-name');

module.exports = Gerrit;
