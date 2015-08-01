"use strict";

var util = require('../../misc/util.js');
var Email = require('./reporters/email.js');
var FindBugs = require('./publishers/findbugs.js');

uppableArrayProxy(Reporters)
keyedObjectElement(util, Reporters, 'email', Email)
keyedObjectElement(util, Reporters, 'findbugs', FindBugs)
