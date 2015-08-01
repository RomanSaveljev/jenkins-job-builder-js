"use strict";

var util = require('../../../misc/util.js');
var Url = require('./pollurl/url.js');

uppableObjectProxy(PollUrl)
primitive(util, PollUrl, 'cron')
primitive(util, PollUrl, 'polling-node')
objectArray(util, PollUrl, 'urls', Url)
