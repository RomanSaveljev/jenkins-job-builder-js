"use strict";

var util = require('../../../misc/util.js');
var CreateStack = require('./cloudformation/create-stack.js');
var DeleteStack = require('./cloudformation/delete-stack.js');

uppableObjectProxy(CloudFormation)
objectArray(util, CloudFormation, 'create-stacks', CreateStack)
objectArray(util, CloudFormation, 'delete-stacks', DeleteStack)
