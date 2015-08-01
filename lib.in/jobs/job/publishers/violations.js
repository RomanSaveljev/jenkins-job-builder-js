"use strict";

var util = require('../../../misc/util.js');
var System = require('./violations/system.js');

var Violations = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(Violations.prototype, 'upper');
Violations.prototype.checkstyle = util.generateObjectAccessor('obj', 'checkstyle', System);
Violations.prototype.codenarc = util.generateObjectAccessor('obj', 'codenarc', System);
Violations.prototype.cpd = util.generateObjectAccessor('obj', 'cpd', System);
Violations.prototype.cpplint = util.generateObjectAccessor('obj', 'cpplint', System);
Violations.prototype.csslint = util.generateObjectAccessor('obj', 'csslint', System);
Violations.prototype.findbugs = util.generateObjectAccessor('obj', 'findbugs', System);
Violations.prototype.fxcop = util.generateObjectAccessor('obj', 'fxcop', System);
Violations.prototype.gendarme = util.generateObjectAccessor('obj', 'gendarme', System);
Violations.prototype.jcreport = util.generateObjectAccessor('obj', 'jcreport', System);
Violations.prototype.jslint = util.generateObjectAccessor('obj', 'jslint', System);
Violations.prototype.pep8 = util.generateObjectAccessor('obj', 'pep8', System);
Violations.prototype.perlcritic = util.generateObjectAccessor('obj', 'perlcritic', System);
Violations.prototype.pmd = util.generateObjectAccessor('obj', 'pmd', System);
Violations.prototype.pylint = util.generateObjectAccessor('obj', 'pylint', System);
Violations.prototype.simian = util.generateObjectAccessor('obj', 'simian', System);
Violations.prototype.stylecop = util.generateObjectAccessor('obj', 'stylecop', System);

module.exports = Violations;
