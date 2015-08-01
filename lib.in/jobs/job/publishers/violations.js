"use strict";

var util = require('../../../misc/util.js');
var System = require('./violations/system.js');

uppableObjectProxy(Violations)
object(util, Violations, 'checkstyle', System)
object(util, Violations, 'codenarc', System)
object(util, Violations, 'cpd', System)
object(util, Violations, 'cpplint', System)
object(util, Violations, 'csslint', System)
object(util, Violations, 'findbugs', System)
object(util, Violations, 'fxcop', System)
object(util, Violations, 'gendarme', System)
object(util, Violations, 'jcreport', System)
object(util, Violations, 'jslint', System)
object(util, Violations, 'pep8', System)
object(util, Violations, 'perlcritic', System)
object(util, Violations, 'pmd', System)
object(util, Violations, 'pylint', System)
object(util, Violations, 'simian', System)
object(util, Violations, 'stylecop', System)
