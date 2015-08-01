"use strict";

var util = require('../../../misc/util.js');
var WorkspaceFileScanner = require('./warnings/workspace-file-scanner.js');
var TotalThresholds = require('./warnings/total-thresholds.js');
var NewThresholds = require('./warnings/new-thresholds.js');

uppableObjectProxy(Warnings)
primitiveArray(util, Warnings, 'console-log-parsers')
objectArray(util, Warnings, 'workspace-file-scanners', WorkspaceFileScanner)
primitive(util, Warnings, 'files-to-include')
primitive(util, Warnings, 'files-to-ignore')
primitive(util, Warnings, 'run-always')
primitive(util, Warnings, 'detect-modules')
primitive(util, Warnings, 'resolve-relative-paths')
primitive(util, Warnings, 'health-threshold-high')
primitive(util, Warnings, 'health-threshold-low')
primitive(util, Warnings, 'health-priorities')
object(util, Warnings, 'total-thresholds', TotalThresholds)
object(util, Warnings, 'new-thresholds', NewThresholds)
primitive(util, Warnings, 'use-delta-for-new-warnings')
primitive(util, Warnings, 'only-use-stable-builds-as-reference')
primitive(util, Warnings, 'default-encoding')
