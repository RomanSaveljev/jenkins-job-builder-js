"use strict";

var util = require('../../../misc/util.js');

uppableObjectProxy(Hipchat)
primitive(util, Hipchat, 'token')
primitiveArray(util, Hipchat, 'rooms')
primitive(util, Hipchat, 'notify-start')
primitive(util, Hipchat, 'notify-success')
primitive(util, Hipchat, 'notify-aborted')
primitive(util, Hipchat, 'notify-not-built')
primitive(util, Hipchat, 'notify-unstable')
primitive(util, Hipchat, 'notify-failure')
primitive(util, Hipchat, 'notify-back-to-normal')
primitive(util, Hipchat, 'start-message')
primitive(util, Hipchat, 'complete-message')
