"use strict";

var util = require('../../../misc/util.js');

uppableObjectProxy(Ant)
primitive(util, Ant, 'targets')
primitive(util, Ant, 'buildfile')
Ant.prototype.properties = util.generateToDoMember('Need to figure out the undefined method proxy');
primitive(util, Ant, 'ant-name')
primitive(util, Ant, 'java-opts')
