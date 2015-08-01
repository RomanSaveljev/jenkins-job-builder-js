"use strict";

var util = require('../../misc/util.js');
var Touchstone = require('./execution-strategy/touchstone.js');

uppableObjectProxy(ExecutionStrategy)
primitive(util, ExecutionStrategy, 'combination-filter')
primitive(util, ExecutionStrategy, 'sequential')
object(util, ExecutionStrategy, 'touchstone', Touchstone)
