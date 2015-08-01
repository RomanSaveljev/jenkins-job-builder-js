"use strict";

var util = require('../../../../misc/util.js');
var CheckContent = require('./url/check-content.js');

uppableObjectProxy(Url)
primitive(util, Url, 'url')
primitive(util, Url, 'proxy')
primitive(util, Url, 'timeout')
primitive(util, Url, 'username')
primitive(util, Url, 'password')
primitive(util, Url, 'check-status')
primitive(util, Url, 'check-etag')
primitive(util, Url, 'check-date')
objectArray(util, Url, 'check-content', CheckContent)
