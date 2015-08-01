"use strict";

var util = require('../../../misc/util.js');
var ConfigFile = require('./config-file-provider/config-file.js');

uppableObjectProxy(ConfigFileProvider)
objectArray(util, ConfigFileProvider, 'files', ConfigFile)
