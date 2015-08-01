"use strict";

var util = require('../../../misc/util.js');

uppableObjectProxy(Cmake)
primitive(util, Cmake, 'source-dir')
primitive(util, Cmake, 'build-dir')
primitive(util, Cmake, 'install-dir')
primitive(util, Cmake, 'build-type')
primitive(util, Cmake, 'generator')
primitive(util, Cmake, 'make-command')
primitive(util, Cmake, 'install-command')
primitive(util, Cmake, 'preload-script')
primitive(util, Cmake, 'other-arguments')
primitive(util, Cmake, 'custom-cmake-path')
primitive(util, Cmake, 'clean-build-dir')
primitive(util, Cmake, 'clean-install-dir')
