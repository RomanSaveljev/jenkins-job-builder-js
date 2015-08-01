"use strict";

var util = require('../../../misc/util.js');

uppableObjectProxy(SauceOndemand)
primitive(util, SauceOndemand, 'enable-sauce-connect')
primitive(util, SauceOndemand, 'sauce-host')
primitive(util, SauceOndemand, 'sauce-port')
primitive(util, SauceOndemand, 'override-username')
primitive(util, SauceOndemand, 'override-api-access-key')
primitive(util, SauceOndemand, 'starting-url')
primitive(util, SauceOndemand, 'type')
primitiveArray(util, SauceOndemand, 'platforms')
primitive(util, SauceOndemand, 'launch-sauce-connect-on-slave')
primitive(util, SauceOndemand, 'https-protocol')
primitive(util, SauceOndemand, 'sauce-connect-options')
