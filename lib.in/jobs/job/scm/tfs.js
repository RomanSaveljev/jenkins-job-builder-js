"use strict";

var util = require('../../../misc/util.js');
var WebAccess = require('./tfs/web-access.js');

uppableObjectProxy(Tfs)
primitive(util, Tfs, 'server-url')
primitive(util, Tfs, 'project-path')
primitive(util, Tfs, 'login')
primitive(util, Tfs, 'use-update')
primitive(util, Tfs, 'local-path')
primitive(util, Tfs, 'workspace')
objectArray(util, Tfs, 'web-access', WebAccess)
