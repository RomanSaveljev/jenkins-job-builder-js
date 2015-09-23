"use strict";

var util = require('../../../misc/util.js');
var Remote = require('./git/remote.js');
var Merge = require('./git/merge.js');
var ChangeLogAgainst = require('./git/changelog-against.js');
var Clean = require('./git/clean.js');
var Submodule = require('./git/submodule.js');

uppableObjectProxy(Git)
primitive(util, Git, 'url')
primitive(util, Git, 'credentials-id')
primitive(util, Git, 'refspec')
primitive(util, Git, 'name')
objectArray(util, Git, 'remotes', Remote)
primitiveArray(util, Git, 'branches')
primitiveArray(util, Git, 'excluded-users')
primitiveArray(util, Git, 'included-regions')
primitiveArray(util, Git, 'excluded-regions')
primitive(util, Git, 'local-branch')
object(util, Git, 'merge', Merge)
primitive(util, Git, 'basedir')
primitive(util, Git, 'skip-tag')
primitive(util, Git, 'shallow-clone')
primitive(util, Git, 'prune')
primitive(util, Git, 'fastpoll')
primitive(util, Git, 'use-author')
primitive(util, Git, 'git-tool')
primitive(util, Git, 'reference-repo')
primitive(util, Git, 'scm-name')
primitive(util, Git, 'ignore-notify')
primitive(util, Git, 'browser')
primitive(util, Git, 'browser-url')
primitive(util, Git, 'browser-version')
primitive(util, Git, 'project-name')
primitive(util, Git, 'choosing-strategy')
primitive(util, Git, 'git-config-name')
primitive(util, Git, 'git-config-email')
object(util, Git, 'changelog-against', ChangeLogAgainst)
object(util, Git, 'clean', Clean)
primitiveArray(util, Git, 'ignore-commits-with-messages')
object(util, Git, 'submodule', Submodule)
primitive(util, Git, 'timeout')
primitive(util, Git, 'wipe-workspace')
