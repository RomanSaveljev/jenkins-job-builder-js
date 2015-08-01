"use strict";

var util = require('../../../misc/util.js');
var JobPassword = require('./inject-passwords/job-password.js');

uppableObjectProxy(InjectPasswords)
primitive(util, InjectPasswords, 'global')
primitive(util, InjectPasswords, 'mask-password-params')
objectArray(util, InjectPasswords, 'job-passwords', JobPassword)
