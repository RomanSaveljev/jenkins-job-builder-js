"use strict";

var util = require('../../../misc/util.js');
var TriggerOn = require('./gerrit/trigger-on.js');
var Project = require('./gerrit/project.js');
var SkipVote = require('./gerrit/skip-vote.js');

uppableObjectProxy(Gerrit)
customArray(util, Gerrit, 'trigger-on', TriggerOn)
primitive(util, Gerrit, 'override-votes')
primitive(util, Gerrit, 'gerrit-build-started-verified-value')
primitive(util, Gerrit, 'gerrit-build-successful-verified-value')
primitive(util, Gerrit, 'gerrit-build-failed-verified-value')
primitive(util, Gerrit, 'gerrit-build-unstable-verified-value')
primitive(util, Gerrit, 'gerrit-build-notbuilt-verified-value')
primitive(util, Gerrit, 'gerrit-build-started-codereview-value')
primitive(util, Gerrit, 'gerrit-build-successful-codereview-value')
primitive(util, Gerrit, 'gerrit-build-failed-codereview-value')
primitive(util, Gerrit, 'gerrit-build-unstable-codereview-value')
primitive(util, Gerrit, 'gerrit-build-notbuilt-codereview-value')
primitive(util, Gerrit, 'failure-message')
primitive(util, Gerrit, 'successful-message')
primitive(util, Gerrit, 'unstable-message')
primitive(util, Gerrit, 'notbuilt-message')
primitive(util, Gerrit, 'failure-message-file')
objectArray(util, Gerrit, 'projects', Project)
object(util, Gerrit, 'skip-vote', SkipVote)
primitive(util, Gerrit, 'silent')
primitive(util, Gerrit, 'silent-start')
primitive(util, Gerrit, 'escape-quotes')
primitive(util, Gerrit, 'no-name-and-email')
primitive(util, Gerrit, 'readable-message')
primitive(util, Gerrit, 'dependency-jobs')
primitive(util, Gerrit, 'notification-level')
primitive(util, Gerrit, 'dynamic-trigger-enabled')
primitive(util, Gerrit, 'dynamic-trigger-url')
primitive(util, Gerrit, 'trigger-for-unreviewed-patches')
primitive(util, Gerrit, 'custom-url')
primitive(util, Gerrit, 'server-name')
