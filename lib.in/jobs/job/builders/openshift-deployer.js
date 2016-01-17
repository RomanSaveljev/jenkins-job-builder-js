"use strict";

var util = require('../../../misc/util.js');

uppableObjectProxy(OpenShiftDeployer)
primitive(util, OpenShiftDeployer, 'api-url')
primitive(util, OpenShiftDeployer, 'dep-cfg')
primitive(util, OpenShiftDeployer, 'namespace')
primitive(util, OpenShiftDeployer, 'auth-token')
primitive(util, OpenShiftDeployer, 'verbose')
