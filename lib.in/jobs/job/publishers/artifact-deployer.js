"use strict";

var util = require('../../../misc/util.js');
var Entry = require('./artifact-deployer/entry.js');

uppableObjectProxy(ArtifactDeployer)
objectArray(util, ArtifactDeployer, 'entries', Entry)
primitive(util, ArtifactDeployer, 'deploy-if-fail')
