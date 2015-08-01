"use strict";

var util = require('../../../misc/util.js');

uppableObjectProxy(BuildPublisher)
primitive(util, BuildPublisher, 'publish-unstable-builds')
primitive(util, BuildPublisher, 'publish-failed-builds')
primitive(util, BuildPublisher, 'days-to-keep')
primitive(util, BuildPublisher, 'num-to-keep')
