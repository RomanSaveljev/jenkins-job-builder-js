"use strict";

var util = require('../../util.js');

var Type = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(Type.prototype, 'upper');
Type.prototype.pattern = util.generatePrimtiveAccessor('obj', 'pattern');
Type.prototype.requireupdate = util.generatePrimtiveAccessor('obj', 'requireupdate');
Type.prototype.deleteoutput = util.generatePrimtiveAccessor('obj', 'deleteoutput');
Type.prototype.skipIfNoTestFiles = util.generatePrimtiveAccessor('obj', 'skip-if-no-test-files');
Type.prototype.stoponerror = util.generatePrimtiveAccessor('obj', 'stoponerror');

module.exports = Type;
