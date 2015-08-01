"use strict";

var util = require('../../../misc/util.js');
var Targets = require('./jacoco/targets.js');

uppableObjectProxy(Jacoco)
primitive(util, Jacoco, 'exec-pattern')
primitive(util, Jacoco, 'class-pattern')
primitive(util, Jacoco, 'source-pattern')
primitive(util, Jacoco, 'update-build-status')
primitive(util, Jacoco, 'inclusion-pattern')
primitive(util, Jacoco, 'exclusion-pattern')
customArray(util, Jacoco, 'targets', Targets)
