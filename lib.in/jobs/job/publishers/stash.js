"use strict";

var util = require('../../../misc/util.js');

uppableObjectProxy(Stash)
primitive(util, Stash, 'url')
primitive(util, Stash, 'username')
primitive(util, Stash, 'password')
primitive(util, Stash, 'ignore-ssl')
primitive(util, Stash, 'commit-sha1')
primitive(util, Stash, 'include-build-number')
