"use strict";

var util = require('../../../misc/util.js');
var Repo = require('./svn/repo.js');

uppableObjectProxy(Svn)
primitive(util, Svn, 'url')
primitive(util, Svn, 'basedir')
primitive(util, Svn, 'credentials-id')
primitive(util, Svn, 'repo-depth')
primitive(util, Svn, 'ignore-externals')
primitive(util, Svn, 'workspaceupdater')
primitiveArray(util, Svn, 'excluded-users')
primitiveArray(util, Svn, 'included-regions')
primitiveArray(util, Svn, 'excluded-regions')
primitiveArray(util, Svn, 'excluded-commit-messages')
primitive(util, Svn, 'exclusion-revprop-name')
primitive(util, Svn, 'ignore-property-changes-on-directories')
primitive(util, Svn, 'filter-changelog')
objectArray(util, Svn, 'repos', Repo)
primitive(util, Svn, 'viewvc-url')
