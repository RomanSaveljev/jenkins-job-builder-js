"use strict";

var util = require('../../misc/util.js');
var AggregateFlowTests = require('../../misc/empty-proxy.js');
var AggregateTests = require('./publishers/aggregate-tests.js');
var Archive = require('./publishers/archive.js');
var ArtifactDeployer = require('./publishers/artifact-deployer.js');
var BlameUpstream = require('../../misc/empty-proxy.js');
var BuildPublisher = require('./publishers/build-publisher.js');
var Campfire = require('./publishers/campfire.js');
var CheckStyle = require('./publishers/checkstyle.js');
var Cifs = require('./publishers/cifs.js');
var Cigame = require('../../misc/empty-proxy.js');
var ClaimBuild = require('../../misc/empty-proxy.js');
var CloneWorkspace = require('./publishers/clone-workspace.js');
var Cloverphp = require('./publishers/cloverphp.js');
var Cobertura = require('./publishers/cobertura.js');
var ConditionalPublisher = require('./publishers/conditional-publisher.js');
var CopyToMaster = require('./publishers/copy-to-master.js');
var CppCheck = require('./publishers/cppcheck.js');
var DescriptionSetter = require('./publishers/description-setter.js');
var DisplayUpstreamChanges = require('../../misc/empty-proxy.js');
var DownstreamExt = require('./publishers/downstream-ext.js');
var Doxygen = require('./publishers/doxygen.js');
var Dry = require('./publishers/dry.js');
var Email = require('./publishers/email.js');
var EmailExt = require('./publishers/email-ext.js');
var EmotionalJenkins = require('../../misc/empty-proxy.js');
var FindBugs = require('./publishers/findbugs.js');
var FingerPrint = require('./publishers/fingerprint.js');
var Fitnesse = require('./publishers/fitnesse.js');
var Ftp = require('./publishers/ftp.js');
var Gatling = require('../../misc/empty-proxy.js');
var Git = require('./publishers/git.js');
var GithubNotifier = require('../../misc/empty-proxy.js');
var GroovyPostbuild = require('./publishers/groovy-postbuild.js');
var HtmlPublisher = require('./publishers/html-publisher.js');
var ImageGallery = require('./publishers/image-gallery.js');
var IrcBot = require('./publishers/ircbot.js');
var Jabber = require('./publishers/jabber.js');
var Jacoco = require('./publishers/jacoco.js');
var Jclouds = require('./publishers/jclouds.js');
var Jira = require('../../misc/empty-proxy.js');
var JoinTrigger = require('./publishers/join-trigger.js');
var Junit = require('./publishers/junit.js');
var LogParser = require('./publishers/logparser.js');
var LogStash = require('./publishers/logstash.js');
var MavenDeploy = require('./publishers/maven-deploy.js');
var Naginator = require('./publishers/naginator.js');
var Performance = require('./publishers/performance.js');
var Pipeline = require('./publishers/pipeline.js');
var Plot = require('./publishers/plot.js');
var Pmd = require('./publishers/pmd.js');
var PostTasks = require('./publishers/post-tasks.js');
var PostBuildScript = require('./publishers/postbuildscript.js');
var RichTextPublisher = require('./publishers/rich-text-publisher.js');
var Robot = require('./publishers/robot.js');
var RubyMetrics = require('./publishers/ruby-metrics.js');
var S3 = require('./publishers/s3.js');
var ScanBuild = require('./publishers/scan-build.js');
var Scoverage = require('./publishers/scoverage.js');
var Scp = require('./publishers/scp.js');
var ShiningPanda = require('./publishers/shining-panda.js');
var SiteMonitor = require('./publishers/sitemonitor.js');
var SlocCount = require('./publishers/sloccount.js');
var Sonar = require('./publishers/sonar.js');
var Ssh = require('./publishers/ssh.js');
var Stash = require('./publishers/stash.js');
var Tap = require('./publishers/tap.js');
var TestNg = require('./publishers/testng.js');
var TextFinder = require('./publishers/text-finder.js');
var Trigger = require('./publishers/trigger.js');
var TriggerParameterizedBuild = require('./publishers/trigger-parameterized-build.js');
var Valgrind = require('./publishers/valgrind.js');
var Violations = require('./publishers/violations.js');
var Warnings = require('./publishers/warnings.js');
var WorkspaceCleanup = require('./publishers/workspace-cleanup.js');
var XmlSummary = require('./publishers/xml-summary.js');
var Xunit = require('./publishers/xunit.js');
var Zulip = require('../../misc/empty-proxy.js');
var Whitesource = require('./publishers/whitesource.js');

uppableArrayProxy(Publishers)
keyedObjectElement(util, Publishers, 'aggregate-flow-tests', AggregateFlowTests)
keyedObjectElement(util, Publishers, 'aggregate-tests', AggregateTests)
keyedObjectElement(util, Publishers, 'archive', Archive)
keyedObjectElement(util, Publishers, 'artifact-deployer', ArtifactDeployer)
keyedObjectElement(util, Publishers, 'blame-upstream', BlameUpstream)
keyedObjectElement(util, Publishers, 'build-publisher', BuildPublisher)
keyedObjectElement(util, Publishers, 'campfire', Campfire)
keyedObjectElement(util, Publishers, 'checkstyle', CheckStyle)
keyedObjectElement(util, Publishers, 'cifs', Cifs)
keyedObjectElement(util, Publishers, 'cigame', Cigame)
keyedObjectElement(util, Publishers, 'claim-build', ClaimBuild)
keyedObjectElement(util, Publishers, 'clone-workspace', CloneWorkspace)
keyedObjectElement(util, Publishers, 'cloverphp', Cloverphp)
keyedObjectElement(util, Publishers, 'cobertura', Cobertura)
keyedArrayElement(util, Publishers, 'conditional-publisher', ConditionalPublisher)
keyedObjectElement(util, Publishers, 'copy-to-master', CopyToMaster)
keyedObjectElement(util, Publishers, 'cppcheck', CppCheck)
keyedObjectElement(util, Publishers, 'description-setter', DescriptionSetter)
keyedObjectElement(util, Publishers, 'display-upstream-changes', DisplayUpstreamChanges)
keyedObjectElement(util, Publishers, 'downstream-ext', DownstreamExt)
keyedObjectElement(util, Publishers, 'doxygen', Doxygen)
keyedObjectElement(util, Publishers, 'dry', Dry)
keyedObjectElement(util, Publishers, 'email', Email)
keyedObjectElement(util, Publishers, 'email-ext', EmailExt)
keyedObjectElement(util, Publishers, 'emotional-jenkins', EmotionalJenkins)
keyedObjectElement(util, Publishers, 'findbugs', FindBugs)
keyedObjectElement(util, Publishers, 'fingerprint', FingerPrint)
keyedObjectElement(util, Publishers, 'fitnesse', Fitnesse)
keyedObjectElement(util, Publishers, 'ftp', Ftp)
keyedObjectElement(util, Publishers, 'gatling', Gatling)
keyedObjectElement(util, Publishers, 'git', Git)
keyedObjectElement(util, Publishers, 'github-notifier', GithubNotifier)
keyedObjectElement(util, Publishers, 'groovy-postbuild', GroovyPostbuild)
keyedObjectElement(util, Publishers, 'html-publisher', HtmlPublisher)
keyedArrayElement(util, Publishers, 'image-gallery', ImageGallery)
keyedObjectElement(util, Publishers, 'ircbot', IrcBot)
keyedObjectElement(util, Publishers, 'jabber', Jabber)
keyedObjectElement(util, Publishers, 'jacoco', Jacoco)
keyedObjectElement(util, Publishers, 'jclouds', Jclouds)
keyedObjectElement(util, Publishers, 'jira', Jira)
keyedObjectElement(util, Publishers, 'join-trigger', JoinTrigger)
keyedObjectElement(util, Publishers, 'junit', Junit)
keyedObjectElement(util, Publishers, 'logparser', LogParser)
keyedObjectElement(util, Publishers, 'logstash', LogStash)
keyedObjectElement(util, Publishers, 'maven-deploy', MavenDeploy)
keyedObjectElement(util, Publishers, 'naginator', Naginator)
keyedObjectElement(util, Publishers, 'performance', Performance)
keyedObjectElement(util, Publishers, 'pipeline', Pipeline)
keyedArrayElement(util, Publishers, 'plot', Plot)
keyedObjectElement(util, Publishers, 'pmd', Pmd)
keyedArrayElement(util, Publishers, 'post-tasks', PostTasks)
keyedObjectElement(util, Publishers, 'postbuildscript', PostBuildScript)
keyedObjectElement(util, Publishers, 'rich-text-publisher', RichTextPublisher)
keyedObjectElement(util, Publishers, 'robot', Robot)
keyedObjectElement(util, Publishers, 'ruby-metrics', RubyMetrics)
keyedObjectElement(util, Publishers, 's3', S3)
keyedObjectElement(util, Publishers, 'scan-build', ScanBuild)
keyedObjectElement(util, Publishers, 'scoverage', Scoverage)
keyedObjectElement(util, Publishers, 'scp', Scp)
keyedObjectElement(util, Publishers, 'shining-panda', ShiningPanda)
keyedObjectElement(util, Publishers, 'sitemonitor', SiteMonitor)
keyedObjectElement(util, Publishers, 'sloccount', SlocCount)
keyedObjectElement(util, Publishers, 'sonar', Sonar)
keyedObjectElement(util, Publishers, 'ssh', Ssh)
keyedObjectElement(util, Publishers, 'stash', Stash)
keyedObjectElement(util, Publishers, 'tap', Tap)
keyedObjectElement(util, Publishers, 'testng', TestNg)
keyedObjectElement(util, Publishers, 'text-finder', TextFinder)
keyedObjectElement(util, Publishers, 'trigger', Trigger)
keyedArrayElement(util, Publishers, 'trigger-parameterized-builds', TriggerParameterizedBuild)
keyedObjectElement(util, Publishers, 'valgrind', Valgrind)
keyedObjectElement(util, Publishers, 'violations', Violations)
keyedObjectElement(util, Publishers, 'warnings', Warnings)
keyedObjectElement(util, Publishers, 'workspace-cleanup', WorkspaceCleanup)
keyedObjectElement(util, Publishers, 'xml-summary', XmlSummary)
keyedObjectElement(util, Publishers, 'xunit', Xunit)
keyedObjectElement(util, Publishers, 'zulip', Zulip)
keyedObjectElement(util, Publishers, 'whitesource', Whitesource)
