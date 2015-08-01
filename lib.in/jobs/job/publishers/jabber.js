"use strict";

var util = require('../../../misc/util.js');

uppableObjectProxy(Jabber)
primitive(util, Jabber, 'notify-on-build-start')
primitive(util, Jabber, 'notify-scm-committers')
primitive(util, Jabber, 'notify-scm-culprits')
primitive(util, Jabber, 'notify-upstream-committers')
primitive(util, Jabber, 'notify-scm-fixers')
primitiveArray(util, Jabber, 'group-targets')
primitiveArray(util, Jabber, 'individual-targets')
primitive(util, Jabber, 'strategy')
primitive(util, Jabber, 'message')
