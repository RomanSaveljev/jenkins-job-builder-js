"use strict";

var util = require('../../../../misc/util.js');

uppableObjectProxy(Redis)
primitiveArray(util, Redis, 'host')
primitiveArray(util, Redis, 'port')
primitiveArray(util, Redis, 'database-number')
primitiveArray(util, Redis, 'database-password')
primitiveArray(util, Redis, 'data-type')
primitiveArray(util, Redis, 'key')
