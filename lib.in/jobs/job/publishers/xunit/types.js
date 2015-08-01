"use strict";

var util = require('../../../../misc/util.js');
var Type = require('./type.js');

var Types = function(upper, array) {
  this.upper = upper;
  this.array = array;
};
util.makeUppable(Types.prototype, 'upper');
Types.prototype.aunit = util.generateKeyedObjectElementAccessor('obj', 'aunit', Type);
Types.prototype.boosttest = util.generateKeyedObjectElementAccessor('obj', 'boosttest', Type);
Types.prototype.checktype = util.generateKeyedObjectElementAccessor('obj', 'checktype', Type);
Types.prototype.cpptest = util.generateKeyedObjectElementAccessor('obj', 'cpptest', Type);
Types.prototype.cppunit = util.generateKeyedObjectElementAccessor('obj', 'cppunit', Type);
Types.prototype.ctest = util.generateKeyedObjectElementAccessor('obj', 'ctest', Type);
Types.prototype.embunit = util.generateKeyedObjectElementAccessor('obj', 'embunit', Type);
Types.prototype.fpcunit = util.generateKeyedObjectElementAccessor('obj', 'fpcunit', Type);
Types.prototype.junit = util.generateKeyedObjectElementAccessor('obj', 'junit', Type);
Types.prototype.mstest = util.generateKeyedObjectElementAccessor('obj', 'mstest', Type);
Types.prototype.nunit = util.generateKeyedObjectElementAccessor('obj', 'nunit', Type);
Types.prototype.phpunit = util.generateKeyedObjectElementAccessor('obj', 'phpunit', Type);
Types.prototype.tusar = util.generateKeyedObjectElementAccessor('obj', 'tusar', Type);
Types.prototype.unittest = util.generateKeyedObjectElementAccessor('obj', 'unittest', Type);
Types.prototype.valgrind = util.generateKeyedObjectElementAccessor('obj', 'valgrind', Type);

module.exports = Types;
