"use strict";

var util = require('../../../misc/util.js');

uppableObjectProxy(WorkspaceCleanup)
primitiveArray(util, WorkspaceCleanup, 'include')
primitiveArray(util, WorkspaceCleanup, 'exclude')
primitive(util, WorkspaceCleanup, 'dirmatch')
