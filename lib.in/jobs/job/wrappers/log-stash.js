"use strict";

var util = require('../../../misc/util.js');
var Redis = require('./log-stash/redis.js');

uppableObjectProxy(LogStash)
primitiveArray(util, LogStash, 'use-redis')
object(util, LogStash, 'redis', Redis)
