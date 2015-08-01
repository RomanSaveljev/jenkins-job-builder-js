"use strict";

var util = require('../../../misc/util.js');
var File = require('./scp/file.js');

uppableObjectProxy(Scp)
primitive(util, Scp, 'site')
objectArray(util, Scp, 'files', File)
