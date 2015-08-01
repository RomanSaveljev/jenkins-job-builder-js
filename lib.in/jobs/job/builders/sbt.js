"use strict";

var util = require('../../../misc/util.js');

uppableObjectProxy(SBT)
primitive(util, SBT, 'name')
primitive(util, SBT, 'jvm-flags')
primitive(util, SBT, 'actions')
primitive(util, SBT, 'sbt-flags')
primitive(util, SBT, 'subdir-path')
