"use strict";

var util = require('../../../misc/util.js');

uppableObjectProxy(Archive)
primitive(util, Archive, 'artifacts')
primitive(util, Archive, 'excludes')
primitive(util, Archive, 'latest-only')
primitive(util, Archive, 'allow-empty')
primitive(util, Archive, 'fingerprint')
primitive(util, Archive, 'only-if-success')
