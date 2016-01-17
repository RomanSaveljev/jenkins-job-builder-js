"use strict";

var util = require('../../misc/util.js');
var Ant = require('./builders/ant.js');
var ArtifactResolver = require('./builders/artifact-resolver.js');
var Beaker = require('./builders/beaker.js');
var ChangeAssemblyVersion = require('./builders/change-assembly-version.js');
var Cmake = require('./builders/cmake.js');
var ConditionalStep = require('./builders/conditional-step.js');
var ConfigFileProvider = require('./wrappers/config-file-provider.js');
var CopyArtifact = require('./builders/copyartifact.js');
var CriticalBlockEnd = require('../../misc/empty-proxy.js');
var CriticalBlockStart = require('../../misc/empty-proxy.js');
var DSL = require('./builders/dsl.js');
var GithubNotifier = require('../../misc/empty-proxy.js');
var Gradle = require('./builders/gradle.js');
var Groovy = require('./builders/groovy.js');
var Inject = require('./wrappers/inject.js');
var ManagedScript = require('./builders/managed-script.js');
var MavenBuilder = require('./builders/maven-builder.js');
var MavenTarget = require('./builders/maven-target.js');
var Msbuild = require('./builders/msbuild.js');
var Multijob = require('./builders/multijob.js');
var SBT = require('./builders/sbt.js');
var ShiningPanda = require('./builders/shining-panda.js');
var Sonar = require('./builders/sonar.js');
var SonatypeClm = require('./builders/sonatype-clm.js');
var SshBuilder = require('./builders/ssh-builder.js');
var SystemGroovy = require('./builders/system-groovy.js');
var Project = require('./builders/project.js');
var TriggerRemote = require('./builders/trigger-remote.js');
var Grails = require('./builders/grails.js');
var Runscope = require('./builders/runscope.js');
var OpenShiftSvcVerify = require('./builders/openshift-svc-verify.js');
var OpenShiftScaler = require('./builders/openshift-scaler.js');
var OpenShiftImgTagger = require('./builders/openshift-img-tagger.js');
var OpenShiftDeployer = require('./builders/openshift-deployer.js');
var OpenShiftDepVerify = require('./builders/openshift-dep-verify.js');

uppableArrayProxy(Builders)
keyedObjectElement(util, Builders, 'ant', Ant)
keyedObjectElement(util, Builders, 'artifact-resolver', ArtifactResolver)
keyedPrimitiveElement(util, Builders, 'batch')
keyedObjectElement(util, Builders, 'beaker', Beaker)
keyedPrimitiveElement(util, Builders, 'builders-from')
keyedObjectElement(util, Builders, 'change-assembly-version', ChangeAssemblyVersion)
keyedObjectElement(util, Builders, 'cmake', Cmake)
keyedObjectElement(util, Builders, 'conditional-step', ConditionalStep)
keyedObjectElement(util, Builders, 'config-file-provider', ConfigFileProvider)
keyedObjectElement(util, Builders, 'copyartifact', CopyArtifact)
keyedObjectElement(util, Builders, 'critical-block-end', CriticalBlockEnd)
keyedObjectElement(util, Builders, 'critical-block-start', CriticalBlockStart)
keyedObjectElement(util, Builders, 'dsl', DSL)
keyedObjectElement(util, Builders, 'github-notifier', GithubNotifier)
keyedObjectElement(util, Builders, 'gradle', Gradle)
keyedObjectElement(util, Builders, 'grails', Grails)
keyedObjectElement(util, Builders, 'groovy', Groovy)
keyedObjectElement(util, Builders, 'inject', Inject)
keyedObjectElement(util, Builders, 'managed-script', ManagedScript)
keyedObjectElement(util, Builders, 'maven-builder', MavenBuilder)
keyedObjectElement(util, Builders, 'maven-target', MavenTarget)
keyedObjectElement(util, Builders, 'msbuild', Msbuild)
keyedObjectElement(util, Builders, 'multijob', Multijob)
keyedPrimitiveElement(util, Builders, 'powershell')
keyedPrimitiveElement(util, Builders, 'python')
keyedObjectElement(util, Builders, 'sbt', SBT)
keyedPrimitiveElement(util, Builders, 'shell')
keyedObjectElement(util, Builders, 'shining-panda', ShiningPanda)
keyedObjectElement(util, Builders, 'sonar', Sonar)
keyedObjectElement(util, Builders, 'sonatype-clm', SonatypeClm)
keyedObjectElement(util, Builders, 'ssh-builder', SshBuilder)
keyedObjectElement(util, Builders, 'system-groovy', SystemGroovy)
keyedArrayElement(util, Builders, 'trigger-builds', Project)
keyedObjectElement(util, Builders, 'trigger-remote', TriggerRemote)
keyedObjectElement(util, Builders, 'runscope', Runscope)
keyedObjectElement(util, Builders, 'openshift-svc-verify', OpenShiftSvcVerify)
keyedObjectElement(util, Builders, 'openshift-scaler', OpenShiftScaler)
keyedObjectElement(util, Builders, 'openshift-img-tagger', OpenShiftImgTagger)
keyedObjectElement(util, Builders, 'openshift-deployer', OpenShiftDeployer)
keyedObjectElement(util, Builders, 'openshift-dep-verify', OpenShiftDepVerify)
