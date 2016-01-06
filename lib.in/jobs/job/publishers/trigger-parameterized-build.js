"use strict";

var util = require('../../../misc/util.js');

uppableObjectProxy(TriggerParameterizedBuild)
primitiveArray(util, TriggerParameterizedBuild, 'project')
primitive(util, TriggerParameterizedBuild, 'predefined-parameters')
primitive(util, TriggerParameterizedBuild, 'current-parameters')
primitive(util, TriggerParameterizedBuild, 'node-parameters')
primitive(util, TriggerParameterizedBuild, 'svn-revision')
primitive(util, TriggerParameterizedBuild, 'git-revision')
primitive(util, TriggerParameterizedBuild, 'condition')
primitive(util, TriggerParameterizedBuild, 'property-file')
primitive(util, TriggerParameterizedBuild, 'fail-on-missing')
primitive(util, TriggerParameterizedBuild, 'trigger-with-no-params')
primitive(util, TriggerParameterizedBuild, 'restrict-matrix-project')
primitive(util, TriggerParameterizedBuild, 'node-label-name')
primitive(util, TriggerParameterizedBuild, 'node-label')
primitive(util, TriggerParameterizedBuild, 'file-encoding')
primitive(util, TriggerParameterizedBuild, 'only-exact-matrix-child-runs')
primitive(util, TriggerParameterizedBuild, 'matrix-child-combination-filter')
primitive(util, TriggerParameterizedBuild, 'use-matrix-child-files')
primitive(util, TriggerParameterizedBuild, 'combine-queued-commits')
