"use strict";

var util = require('../../../../misc/util.js');

uppableObjectProxy(Channel)
primitive(util, Channel, 'name')
primitive(util, Channel, 'password')
primitive(util, Channel, 'notify-only')
