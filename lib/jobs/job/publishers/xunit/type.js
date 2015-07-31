"use strict";

var util = require('../../../../misc/util.js');

var Type = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(Type.prototype, 'upper');
Type.prototype.pattern = util.generatePrimitiveAccessor('obj', 'pattern');
Type.prototype.requireupdate = util.generatePrimitiveAccessor('obj', 'requireupdate');
Type.prototype.deleteoutput = util.generatePrimitiveAccessor('obj', 'deleteoutput');
Type.prototype.skipIfNoTestFiles = util.generatePrimitiveAccessor('obj', 'skip-if-no-test-files');
Type.prototype.stoponerror = util.generatePrimitiveAccessor('obj', 'stoponerror');

module.exports = Type;
