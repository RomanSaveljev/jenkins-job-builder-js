"use strict";

var util = require('../../../misc/util.js');

uppableObjectProxy(Msbuild)
primitive(util, Msbuild, 'msbuild-version')
primitive(util, Msbuild, 'solution-file')
primitive(util, Msbuild, 'extra-parameters')
primitive(util, Msbuild, 'pass-build-variables')
primitive(util, Msbuild, 'continue-on-build-failure')
