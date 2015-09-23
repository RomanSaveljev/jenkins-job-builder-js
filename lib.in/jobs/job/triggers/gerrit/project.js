"use strict";

var util = require('../../../../misc/util.js');
var Branch = require('./project/branch.js');
var FilePath = require('./project/file-path.js');
var Topic = require('./project/topic.js');

uppableObjectProxy(Project)
primitive(util, Project, 'project-compare-type')
primitive(util, Project, 'project-pattern')
primitive(util, Project, 'branch-compare-type')
primitive(util, Project, 'branch-pattern')
objectArray(util, Project, 'branches', Branch)
objectArray(util, Project, 'file-paths', FilePath)
objectArray(util, Project, 'forbidden-file-paths', FilePath)
objectArray(util, Project, 'topics', Topic)
