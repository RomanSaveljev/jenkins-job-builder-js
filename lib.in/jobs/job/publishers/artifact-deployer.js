"use strict";

var util = require('../../../misc/util.js');

uppableObjectProxy(ArtifactDeployer)
objectArray(util, ArtifactDeployer, 'entries', Entry)
primitive(util, ArtifactDeployer, 'deploy-if-fail')
