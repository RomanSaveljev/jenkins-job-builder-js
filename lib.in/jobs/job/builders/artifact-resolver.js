"use strict";

var util = require('../../../misc/util.js');
var Artifact = require('./artifact-resolver/artifact.js');

uppableObjectProxy(ArtifactResolver)
primitive(util, ArtifactResolver, 'fail-on-error')
primitive(util, ArtifactResolver, 'repository-logging')
primitive(util, ArtifactResolver, 'target-directory')
objectArray(util, ArtifactResolver, 'artifacts', Artifact)
