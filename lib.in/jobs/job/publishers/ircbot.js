"use strict";

var util = require('../../../misc/util.js');
var Channel = require('./ircbot/channel.js');

uppableObjectProxy(IrcBot)
primitive(util, IrcBot, 'strategy')
primitive(util, IrcBot, 'notify-start')
primitive(util, IrcBot, 'notify-committers')
primitive(util, IrcBot, 'notify-culprits')
primitive(util, IrcBot, 'notify-upstream')
primitive(util, IrcBot, 'notify-fixers')
primitive(util, IrcBot, 'message-type')
objectArray(util, IrcBot, 'artifacts', Channel)
primitive(util, IrcBot, 'matrix-notifier')
