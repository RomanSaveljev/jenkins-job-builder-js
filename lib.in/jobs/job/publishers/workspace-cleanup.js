"use strict";

var util = require('../../../misc/util.js');
var CleanIf = require('./workspace-cleanup/clean-if.js');

uppableObjectProxy(WorkspaceCleanup)
primitiveArray(util, WorkspaceCleanup, 'include')
primitiveArray(util, WorkspaceCleanup, 'exclude')
primitive(util, WorkspaceCleanup, 'dirmatch')
objectArray(util, WorkspaceCleanup, 'clean-if', CleanIf)
primitive(util, WorkspaceCleanup, 'fail-build')
primitive(util, WorkspaceCleanup, 'clean-parent')
