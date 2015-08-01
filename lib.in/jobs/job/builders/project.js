"use strict";

var util = require('../../../misc/util.js');
var Bool = require('./project/bool.js');
var BlockThresholds = require('./project/block-thresholds.js');

uppableObjectProxy(Project)
primitiveArray(util, Project, 'project')
primitive(util, Project, 'predefined-parameters')
objectArray(util, Project, 'bool-parameters', Bool)
primitive(util, Project, 'property-file')
primitive(util, Project, 'property-file-fail-on-missing')
primitive(util, Project, 'current-parameters')
primitive(util, Project, 'node-label-name')
primitive(util, Project, 'node-label')
primitive(util, Project, 'svn-revision')
primitive(util, Project, 'git-revision')
primitive(util, Project, 'block')
object(util, Project, 'block-thresholds', BlockThresholds)
primitive(util, Project, 'same-node')
objectArray(util, Project, 'parameter-factories', ParameterFactories)
