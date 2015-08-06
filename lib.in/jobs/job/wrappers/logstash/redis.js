"use strict";

var util = require('../../../../misc/util.js');

uppableObjectProxy(Redis)
primitive(util, Redis, 'host')
primitive(util, Redis, 'port')
primitive(util, Redis, 'database-number')
primitive(util, Redis, 'database-password')
primitive(util, Redis, 'data-type')
primitive(util, Redis, 'key')
