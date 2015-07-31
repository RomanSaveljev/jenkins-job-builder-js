"use strict";

var util = require('../../../misc/util.js');
var Instances = require('./jclouds/instances.js');

var JClouds = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(JClouds.prototype, 'upper');
JClouds.prototype.singleUse = util.generatePrimitiveArrayAccessor('obj', 'single-use');
JClouds.prototype.instances = util.generateCustomArrayAccessor('obj', 'instances', Instances);

module.exports = JClouds;
