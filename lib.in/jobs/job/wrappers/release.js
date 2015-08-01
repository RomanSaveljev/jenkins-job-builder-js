"use strict";

var util = require('../../../misc/util.js');
var Parameters = require('../parameters.js');
var Builders = require('../builders.js');

uppableObjectProxy(Release)
primitive(util, Release, 'keep-forever')
primitive(util, Release, 'override-build-parameters')
primitive(util, Release, 'version-template')
customArray(util, Release, 'parameters', Parameters)
customArray(util, Release, 'pre-build', Builders)
customArray(util, Release, 'post-build', Builders)
customArray(util, Release, 'post-success', Builders)
customArray(util, Release, 'post-failure', Builders)
