"use strict";

var util = require('../../../../misc/util.js');
var CheckContent = require('./file/check-content.js');

uppableObjectProxy(File)
primitive(util, File, 'path')
primitive(util, File, 'strategy')
objectArray(util, File, 'check-content', CheckContent)
primitive(util, File, 'ignore-modificaton-date')
