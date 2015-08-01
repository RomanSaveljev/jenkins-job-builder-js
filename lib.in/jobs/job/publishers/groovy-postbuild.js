"use strict";

var util = require('../../../misc/util.js');

var GroovyPostbuild = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(GroovyPostbuild.prototype, 'upper');
GroovyPostbuild.prototype.script = util.generatePrimitiveAccessor('obj', 'script');
GroovyPostbuild.prototype.classpath = util.generatePrimitiveArrayAccessor('obj', 'classpath');
GroovyPostbuild.prototype.onFailure = util.generatePrimitiveAccessor('obj', 'on-failure');
GroovyPostbuild.prototype.matrixParent = util.generatePrimitiveAccessor('obj', 'matrix-parent');
GroovyPostbuild.prototype.sandbox = util.generatePrimitiveAccessor('obj', 'sandbox');

module.exports = GroovyPostbuild;
