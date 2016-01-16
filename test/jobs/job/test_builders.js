var should = require('should');
var Builders = require('../../../lib/jobs/job/builders.js');
var testlib = require('../../testlib.js');
var Ant = require('../../../lib/jobs/job/builders/ant.js');
var ArtifactResolver = require('../../../lib/jobs/job/builders/artifact-resolver.js');
var Beaker = require('../../../lib/jobs/job/builders/beaker.js');
var ChangeAssemblyVersion = require('../../../lib/jobs/job/builders/change-assembly-version.js');
var Cmake = require('../../../lib/jobs/job/builders/cmake.js');
var ConditionalStep = require('../../../lib/jobs/job/builders/conditional-step.js');
var ConfigFileProvider = require('../../../lib/jobs/job/wrappers/config-file-provider.js');
var CopyArtifact = require('../../../lib/jobs/job/builders/copyartifact.js');
var EmptyProxy = require('../../../lib/misc/empty-proxy.js');
var Dsl = require('../../../lib/jobs/job/builders/dsl.js');
var Gradle = require('../../../lib/jobs/job/builders/gradle.js');
var Grails = require('../../../lib/jobs/job/builders/grails.js');
var Groovy = require('../../../lib/jobs/job/builders/groovy.js');
var Inject = require('../../../lib/jobs/job/wrappers/inject.js');
var ManagedScript = require('../../../lib/jobs/job/builders/managed-script.js');
var MavenBuilder = require('../../../lib/jobs/job/builders/maven-builder.js');
var MavenTarget = require('../../../lib/jobs/job/builders/maven-target.js');
var Msbuild = require('../../../lib/jobs/job/builders/msbuild.js');
var MultiJob = require('../../../lib/jobs/job/builders/multijob.js');
var Sbt = require('../../../lib/jobs/job/builders/sbt.js');
var ShiningPanda = require('../../../lib/jobs/job/builders/shining-panda.js');
var Sonar = require('../../../lib/jobs/job/builders/sonar.js');
var SonatypeClm = require('../../../lib/jobs/job/builders/sonatype-clm.js');
var SshBuilder = require('../../../lib/jobs/job/builders/ssh-builder.js');
var SystemGroovy = require('../../../lib/jobs/job/builders/system-groovy.js');
//var Project = require('../../../lib/jobs/job/builders/project.js');
var TriggerRemote = require('../../../lib/jobs/job/builders/trigger-remote.js');
var Runscope = require('../../../lib/jobs/job/builders/runscope.js');
var OpenShiftSvcVerify = require('../../../lib/jobs/job/builders/openshift-svc-verify.js');
var OpenShiftScaler = require('../../../lib/jobs/job/builders/openshift-scaler.js');

describe('Builders', function() {
  describe('constructor', testlib.describeProxyConstructor(Builders));
  describe('object', testlib.describeProxyUppableAndable(Builders));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Builders, 'ant', Ant));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Builders, 'artifact-resolver', ArtifactResolver));
  describe('properties', testlib.describeProxyKeyedPrimitiveProperty(Builders, 'batch'));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Builders, 'beaker', Beaker));
  describe('properties', testlib.describeProxyKeyedPrimitiveProperty(Builders, 'builders-from'));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Builders, 'change-assembly-version', ChangeAssemblyVersion));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Builders, 'cmake', Cmake));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Builders, 'conditional-step', ConditionalStep));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Builders, 'config-file-provider', ConfigFileProvider));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Builders, 'copyartifact', CopyArtifact));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Builders, 'critical-block-end', EmptyProxy));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Builders, 'critical-block-start', EmptyProxy));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Builders, 'dsl', Dsl));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Builders, 'github-notifier', EmptyProxy));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Builders, 'gradle', Gradle));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Builders, 'grails', Grails));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Builders, 'groovy', Groovy));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Builders, 'inject', Inject));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Builders, 'managed-script', ManagedScript));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Builders, 'maven-builder', MavenBuilder));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Builders, 'maven-target', MavenTarget));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Builders, 'msbuild', Msbuild));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Builders, 'multijob', MultiJob));
  describe('properties', testlib.describeProxyKeyedPrimitiveProperty(Builders, 'powershell'));
  describe('properties', testlib.describeProxyKeyedPrimitiveProperty(Builders, 'python'));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Builders, 'sbt', Sbt));
  describe('properties', testlib.describeProxyKeyedPrimitiveProperty(Builders, 'shell'));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Builders, 'shining-panda', ShiningPanda));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Builders, 'sonar', Sonar));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Builders, 'sonatype-clm', SonatypeClm));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Builders, 'ssh-builder', SshBuilder));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Builders, 'system-groovy', SystemGroovy));
  //describe('properties', testlib.describeProxyKeyedObjectProperty(Builders, 'trigger-builds', Project));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Builders, 'trigger-remote', TriggerRemote));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Builders, 'runscope', Runscope));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Builders, 'openshift-svc-verify', OpenShiftSvcVerify));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Builders, 'openshift-scaler', OpenShiftScaler));
});
