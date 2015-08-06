"use strict";

var util = require('../../misc/util.js');

uppableObjectProxy(HipChat)
primitive(util, HipChat, 'enabled')
primitiveArray(util, HipChat, 'rooms')
primitive(util, HipChat, 'notify-start')
primitive(util, HipChat, 'notify-success')
primitive(util, HipChat, 'notify-aborted')
primitive(util, HipChat, 'notify-not-built')
primitive(util, HipChat, 'notify-unstable')
primitive(util, HipChat, 'notify-failure')
primitive(util, HipChat, 'notify-back-to-normal')
