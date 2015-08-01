"use strict";

var util = require('../../../misc/util.js');

uppableObjectProxy(CopyToSlave)
primitiveArray(util, CopyToSlave, 'includes')
primitiveArray(util, CopyToSlave, 'excludes')
primitive(util, CopyToSlave, 'flatten')
primitive(util, CopyToSlave, 'relative-to')
primitive(util, CopyToSlave, 'include-ant-excludes')
