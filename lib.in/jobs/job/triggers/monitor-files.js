"use strict";

var util = require('../../../misc/util.js');
var File = require('./monitor-files/file.js');

uppableObjectProxy(MonitorFiles)
objectArray(util, MonitorFiles, 'files', File)
primitive(util, MonitorFiles, 'cron')
