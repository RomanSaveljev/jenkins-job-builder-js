"use strict";

var util = require('../../../misc/util.js');
var Instances = require('./jclouds/instances.js');

uppableObjectProxy(JClouds)
primitiveArray(util, JClouds, 'single-use')
customArray(util, JClouds, 'instances', Instances)
