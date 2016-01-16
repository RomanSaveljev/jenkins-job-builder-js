var should = require('should');
var Scm = require('../../../lib/jobs/job/scm.js');
var testlib = require('../../testlib.js');
var Git = require('../../../lib/jobs/job/scm/git.js');
var Hg = require('../../../lib/jobs/job/scm/hg.js');
var Repo = require('../../../lib/jobs/job/scm/repo.js');
var Store = require('../../../lib/jobs/job/scm/store.js');
var Svn = require('../../../lib/jobs/job/scm/svn.js');
var Tfs = require('../../../lib/jobs/job/scm/tfs.js');
var Workspace = require('../../../lib/jobs/job/scm/workspace.js');
var OpenShiftImgStreams = require('../../../lib/jobs/job/scm/openshift-img-streams.js');

describe('Scm', function() {
  describe('constructor', testlib.describeProxyConstructor(Scm));
  describe('object', testlib.describeProxyUppableAndable(Scm));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Scm, 'git', Git));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Scm, 'hg', Hg));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Scm, 'repo', Repo));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Scm, 'store', Store));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Scm, 'svn', Svn));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Scm, 'tfs', Tfs));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Scm, 'workspace', Workspace));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Scm, 'openshift-img-streams', OpenShiftImgStreams));
});
