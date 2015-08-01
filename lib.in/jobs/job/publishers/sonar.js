"use strict";

var util = require('../../../misc/util.js');
var SkipGlobalTriggers = require('./sonar/skip-global-triggers.js');

uppableObjectProxy(Sonar)
primitive(util, Sonar, 'jdk')
primitive(util, Sonar, 'branch')
primitive(util, Sonar, 'language')
primitive(util, Sonar, 'maven-opts')
primitive(util, Sonar, 'additional-properties')
object(util, Sonar, 'skip-global-triggers', SkipGlobalTriggers)
