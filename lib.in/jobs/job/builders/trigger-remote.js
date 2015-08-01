"use strict";

var util = require('../../../misc/util.js');

uppableObjectProxy(TriggerRemote)
primitive(util, TriggerRemote, 'remote-jenkins-name')
primitive(util, TriggerRemote, 'job')
primitive(util, TriggerRemote, 'should-not-fail-build')
primitive(util, TriggerRemote, 'prevent-remote-build-queue')
primitive(util, TriggerRemote, 'block')
primitive(util, TriggerRemote, 'poll-interval')
primitive(util, TriggerRemote, 'connection-retry-limit')
primitive(util, TriggerRemote, 'predefined-parameters')
primitive(util, TriggerRemote, 'property-file')
