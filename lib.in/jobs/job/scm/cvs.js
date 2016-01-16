"use strict";

var util = require('../../../misc/util.js');
var Repo = require('./cvs/repo.js');

uppableObjectProxy(Cvs)
objectArray(util, Cvs, 'repos', Repo)
primitive(util, Cvs, 'use-update')
primitive(util, Cvs, 'prune-empty')
primitive(util, Cvs, 'skip-changelog')
primitive(util, Cvs, 'show-all-output')
primitive(util, Cvs, 'clean-checkout')
primitive(util, Cvs, 'clean-copy')
