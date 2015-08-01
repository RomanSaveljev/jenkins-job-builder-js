"use strict";

var util = require('../../../misc/util.js');
var Project = require('./multijob/project.js')

uppableObjectProxy(Multijob)
primitive(util, Multijob, 'name')
primitive(util, Multijob, 'condition')
objectArray(util, Multijob, 'projects', Project)
