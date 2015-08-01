"use strict";

var util = require('../../../misc/util.js');

uppableObjectProxy(MongoDb)
primitiveArray(util, MongoDb, 'name')
primitiveArray(util, MongoDb, 'data-directory')
primitiveArray(util, MongoDb, 'port')
primitiveArray(util, MongoDb, 'startup-params')
primitiveArray(util, MongoDb, 'start-timeout')
