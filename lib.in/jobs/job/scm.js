"use strict";

var util = require('../../misc/util.js');
var Git = require('./scm/git.js');
var Hg = require('./scm/hg.js');
var Repo = require('./scm/repo.js');
var Store = require('./scm/store.js');
var Svn = require('./scm/svn.js');
var Cvs = require('./scm/cvs.js');
var Tfs = require('./scm/tfs.js');
var Workspace = require('./scm/workspace.js');
var OpenShiftImgStreams = require('./scm/openshift-img-streams.js');

uppableArrayProxy(Scm)
keyedObjectElement(util, Scm, 'git', Git)
keyedObjectElement(util, Scm, 'hg', Hg)
keyedObjectElement(util, Scm, 'repo', Repo)
keyedObjectElement(util, Scm, 'store', Store)
keyedObjectElement(util, Scm, 'svn', Svn)
keyedObjectElement(util, Scm, 'cvs', Cvs)
keyedObjectElement(util, Scm, 'tfs', Tfs)
keyedObjectElement(util, Scm, 'workspace', Workspace)
keyedObjectElement(util, Scm, 'openshift-img-streams', OpenShiftImgStreams)
