"use strict";

var util = require('../../../misc/util.js');

uppableObjectProxy(CloudFormation)
primitive(util, CloudFormation, 'name')
primitive(util, CloudFormation, 'description')
primitive(util, CloudFormation, 'recipe')
primitiveArray(util, CloudFormation, 'parameters')
primitive(util, CloudFormation, 'timeout')
primitive(util, CloudFormation, 'access-key')
primitive(util, CloudFormation, 'secret-key')
primitive(util, CloudFormation, 'sleep')
primitive(util, CloudFormation, 'region')
