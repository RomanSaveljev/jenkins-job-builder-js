"use strict";

var util = require('../../../misc/util.js');
var Redis = require('./logstash/redis.js');

uppableObjectProxy(LogStash)
primitive(util, LogStash, 'use-redis')
object(util, LogStash, 'redis', Redis)
