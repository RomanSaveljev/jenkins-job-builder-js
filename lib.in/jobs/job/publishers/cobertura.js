"use strict";

var util = require('../../../misc/util.js');
var Targets = require('./cobertura/targets.js');

uppableObjectProxy(Cobertura)
primitive(util, Cobertura, 'report-file')
primitive(util, Cobertura, 'only-stable')
primitive(util, Cobertura, 'fail-no-reports')
primitive(util, Cobertura, 'fail-unhealthy')
primitive(util, Cobertura, 'fail-unstable')
primitive(util, Cobertura, 'health-auto-update')
primitive(util, Cobertura, 'stability-auto-update')
primitive(util, Cobertura, 'zoom-coverage-chart')
primitive(util, Cobertura, 'source-encoding')
customArray(util, Cobertura, 'targets', Targets)
