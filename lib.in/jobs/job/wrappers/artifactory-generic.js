"use strict";

var util = require('../../../misc/util.js');

uppableObjectProxy(ArtifactoryGeneric)
primitive(util, ArtifactoryGeneric, 'url')
primitive(util, ArtifactoryGeneric, 'name')
primitive(util, ArtifactoryGeneric, 'repo-key')
primitive(util, ArtifactoryGeneric, 'snapshot-repo-key')
primitiveArray(util, ArtifactoryGeneric, 'deploy-pattern')
primitiveArray(util, ArtifactoryGeneric, 'resolve-pattern')
primitiveArray(util, ArtifactoryGeneric, 'matrix-params')
primitive(util, ArtifactoryGeneric, 'deploy-build-info')
primitive(util, ArtifactoryGeneric, 'env-vars-include')
primitiveArray(util, ArtifactoryGeneric, 'env-vars-include-patterns')
primitiveArray(util, ArtifactoryGeneric, 'env-vars-exclude-patterns')
primitive(util, ArtifactoryGeneric, 'discard-old-builds')
primitive(util, ArtifactoryGeneric, 'discard-build-artifacts')
