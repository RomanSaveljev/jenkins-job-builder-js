"use strict";

var util = require('../../../misc/util.js');
var Site = require('./sitemonitor/site.js');

uppableObjectProxy(SiteMonitor)
objectArray(util, SiteMonitor, 'sites', Site)
