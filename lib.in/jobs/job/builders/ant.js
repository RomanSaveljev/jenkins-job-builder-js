"use strict";

var util = require('../../../misc/util.js');
var Properties = require('./ant/properties.js')

uppableObjectProxy(Ant)
primitive(util, Ant, 'targets')
primitive(util, Ant, 'buildfile')
object(util, Ant, 'properties', Properties)
primitive(util, Ant, 'ant-name')
primitive(util, Ant, 'java-opts')
