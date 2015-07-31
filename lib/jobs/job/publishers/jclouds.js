"use strict";

var util = require('../util.js');

var Jclouds = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(Jclouds.prototype, 'upper');
Jclouds.prototype.profile = util.generatePrimitiveAccessor('obj', 'profile');
Jclouds.prototype.files = util.generatePrimitiveAccessor('obj', 'files');
Jclouds.prototype.basedir = util.generatePrimitiveAccessor('obj', 'basedir');
Jclouds.prototype.container = util.generatePrimitiveAccessor('obj', 'container');
Jclouds.prototype.hierarchy = util.generatePrimitiveAccessor('obj', 'hierarchy');

module.exports = Jclouds;
