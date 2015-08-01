"use strict";

var util = require('../../../misc/util.js');

uppableObjectProxy(Email)
primitive(util, Email, 'recipients')
primitive(util, Email, 'notify-every-unstable-build')
primitive(util, Email, 'send-to-individuals')
