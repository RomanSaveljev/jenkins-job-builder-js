"use strict";

var util = require('../../misc/util.js');

uppableObjectProxy(HipChat)
primitive(util, HipChat, 'enabled')
primitiveArray(util, HipChat, 'rooms')
primitiveArray(util, HipChat, 'notify-start')
primitiveArray(util, HipChat, 'notify-success')
primitiveArray(util, HipChat, 'notify-aborted')
primitiveArray(util, HipChat, 'notify-not-built')
primitiveArray(util, HipChat, 'notify-unstable')
primitiveArray(util, HipChat, 'notify-failure')
primitiveArray(util, HipChat, 'notify-back-to-normal')
