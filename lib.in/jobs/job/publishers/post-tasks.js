"use strict";

var util = require('../../../misc/util.js');
var Match = require('./post-tasks/match.js');

uppableObjectProxy(PostTasks)
objectArray(util, PostTasks, 'matches', Match)
primitive(util, PostTasks, 'escalate-status')
primitive(util, PostTasks, 'escalate-status')
primitive(util, PostTasks, 'script')
