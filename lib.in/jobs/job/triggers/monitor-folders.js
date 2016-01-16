"use strict";

var util = require('../../../misc/util.js');

uppableObjectProxy(MonitorFolders)
primitive(util, MonitorFolders, 'path')
primitiveArray(util, MonitorFolders, 'includes')
primitive(util, MonitorFolders, 'excludes')
primitive(util, MonitorFolders, 'check-modification-date')
primitive(util, MonitorFolders, 'check-content')
primitive(util, MonitorFolders, 'check-fewer')
primitive(util, MonitorFolders, 'cron')
