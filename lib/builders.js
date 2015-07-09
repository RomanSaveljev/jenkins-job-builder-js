/*!
 * builders - lib/builders.js
 * Copyright(c) 2015 Roman Saveljev <roman.saveljev@haltian.com>
 * MIT Licensed
 */

"use strict";

/**
* Module dependencies.
*/
var util = require('./util.js');
var Ant = require('./builders/ant.js');
var ArtifactResolver = require('./builders/artifact-resolver.js');
var Beaker = require('./builders/beaker.js');
var ChangeAssemblyVersion = require('./builders/change-assembly-version.js');
var Cmake = require('./builders/cmake.js');
var ConditionalStep = require('./builders/conditional-step.js');
var ConfigFileProvider = require('./wrappers/config-file-provider.js');
var CopyArtifact = require('./builders/copy-artifact.js');
var CriticalBlockEnd = require('./proxies/empty-proxy.js');
var CriticalBlockStart = require('./proxies/empty-proxy.js');
var DSL = require('./builders/dsl.js');
var GithubNotifier = require('./proxies/empty-proxy.js');
var Gradle = require('./builders/gradle.js');
var Groovy = require('./builders/groovy.js');
var Inject = require('./wrappers/inject.js');
var ManagedScript = require('./builders/managed-script.js');
var MavenBuilder = require('./builders/maven-builder.js');
var MavenTarget = require('./builders/maven-target.js');
var Msbuild = require('./builders/msbuild.js');
var Multijob = require('./builder/multijob.js');
var SBT = require('./builders/sbt.js');
var ShiningPanda = require('./builders/shining-panda.js');
var Sonar = require('./builders/sonar.js');
var SonatypeClm = require('./builders/sonatype-clm.js');
var SshBuilder = require('./builders/ssh-builder.js');
var SystemGroovy = require('./builders/system-groovy.js');
var Project = require('./builders/project.js');
var TriggerRemote = require('./builders/trigger-remote.js');

var Builders = function(upper, array) {
  this.upper = upper;
  this.array = array;
  return this;
};

util.makeUppable(Builders.prototype, 'upper');
Builders.prototype.ant = util.generateKeyedObjectElementAccessor('array', 'ant', Ant);
Builders.prototype.artifactResolver = util.generateKeyedObjectElementAccessor('array', 'artifact-resolver', ArtifactResolver);
Builders.prototype.batch = util.generateKeyedPrimitiveElementAccessor('array', 'batch');
Builders.prototype.beaker = util.generateKeyedObjectElementAccessor('array', 'beaker', Beaker);
Builders.prototype.buildersFrom = util.generateKeyedPrimitiveElementAccessor('array', 'builders-from');
Builders.prototype.changeAssemblyVersion = util.generateKeyedObjectElementAccessor('array', 'change-assembly-version', ChangeAssemblyVersion);
Builders.prototype.cmake = util.generateKeyedObjectElementAccessor('array', 'cmake', Cmake);
Builders.prototype.conditionalStep = util.generateKeyedObjectElementAccessor('array', 'conditional-step', ConditionalStep);
Builders.prototype.configFileProvider = util.generateKeyedObjectElementAccessor('array', 'config-file-provider', ConfigFileProvider);
Builders.prototype.copyArtifact = util.generateKeyedObjectElementAccessor('array', 'copy-artifact', CopyArtifact);
Builders.prototype.criticalBlockEnd = util.generateKeyedObjectElementAccessor('array', 'critical-block-end', CriticalBlockEnd);
Builders.prototype.criticalBlockStart = util.generateKeyedObjectElementAccessor('array', 'critical-block-start', CriticalBlockStart);
Builders.prototype.dsl = util.generateKeyedObjectElementAccessor('array', 'dsl', DSL);
Builders.prototype.githubNotifier = util.generateKeyedObjectElementAccessor('array', 'github-notifier', GithubNotifier);
Builders.prototype.gradle = util.generateKeyedObjectElementAccessor('array', 'gradle', Gradle);
Builders.prototype.grails = util.generateKeyedObjectElementAccessor('array', 'grails', Grails);
Builders.prototype.groovy = util.generateKeyedObjectElementAccessor('array', 'groovy', Groovy);
Builders.prototype.inject = util.generateKeyedObjectElementAccessor('array', 'inject', Inject);
Builders.prototype.managedScript = util.generateKeyedObjectElementAccessor('array', 'managed-script', ManagedScript);
Builders.prototype.mavenBuilder = util.generateKeyedObjectElementAccessor('array', 'maven-builder', MavenBuilder);
Builders.prototype.mavenTarget = util.generateKeyedObjectElementAccessor('array', 'maven-target', MavenTarget);
Builders.prototype.msbuild = util.generateKeyedObjectElementAccessor('array', 'msbuild', Msbuild);
Builders.prototype.multijob = util.generateKeyedObjectElementAccessor('array', 'multijob', Multijob);
Builders.prototype.powershell = util.generateKeyedPrimitiveElementAccessor('array', 'powershell');
Builders.prototype.python = util.generateKeyedPrimitiveElementAccessor('array', 'python');
Builders.prototype.sbt = util.generateKeyedObjectElementAccessor('array', 'sbt', SBT);
Builders.prototype.shell = util.generateKeyedPrimitiveElementAccessor('array', 'shell');
Builders.prototype.shiningPanda = util.generateKeyedObjectElementAccessor('array', 'shining-panda', ShiningPanda);
Builders.prototype.sonar = util.generateKeyedObjectElementAccessor('array', 'sonar', Sonar);
Builders.prototype.sonatypeClm = util.generateKeyedObjectElementAccessor('array', 'sonatype-clm', SonatypeClm);
Builders.prototype.sshBuilder = util.generateKeyedObjectElementAccessor('array', 'ssh-builder', SshBuilder);
Builders.prototype.systemGroovy = util.generateKeyedObjectElementAccessor('array', 'system-groovy', SystemGroovy);
Builders.prototype.triggerBuilds = util.generateKeyedArrayElementAccessor('array', 'trigger-builds', Project);
Builders.prototype.triggerRemote = util.generateKeyedArrayElementAccessor('array', 'trigger-remote', TriggerRemote);

module.exports = Builders;
