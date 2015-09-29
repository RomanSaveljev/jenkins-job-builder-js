"use strict";

var util = require('../../../misc/util.js');
var Tags = require('./git/tags.js');
var Branches = require('./git/branches.js');
var Notes = require('./git/notes.js');

uppableObjectProxy(Git)
primitive(util, Git, 'push-merge')
primitive(util, Git, 'push-only-if-success')
customArray(util, Git, 'tags', Tags)
customArray(util, Git, 'branches', Branches)
customArray(util, Git, 'notes', Notes)
