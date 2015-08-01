"use strict";

var util = require('../../../../misc/util.js');

uppableObjectProxy(Artifact)
primitive(util, Artifact, 'group-id')
primitive(util, Artifact, 'artifact-id')
primitive(util, Artifact, 'version')
primitive(util, Artifact, 'classifier')
primitive(util, Artifact, 'extension')
primitive(util, Artifact, 'target-file-name')
