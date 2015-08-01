"use strict";

var util = require('../../../misc/util.js');
var Group = require('./build-result/group.js');

uppableObjectProxy(BuildResult)
objectArray(util, BuildResult, 'groups', Group)
primitive(util, BuildResult, 'combine')
primitive(util, BuildResult, 'cron')
