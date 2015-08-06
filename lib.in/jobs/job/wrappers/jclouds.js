"use strict";

var util = require('../../../misc/util.js');
var Instances = require('./jclouds/instances.js');

uppableObjectProxy(JClouds)
primitive(util, JClouds, 'single-use')
customArray(util, JClouds, 'instances', Instances)
