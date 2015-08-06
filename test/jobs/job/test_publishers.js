var should = require('should');
var Publishers = require('../../../lib/jobs/job/publishers.js');
var testlib = require('../../testlib.js');
var EmptyProxy = require('../../../lib/misc/empty-proxy.js');
var AggregateTests = require('../../../lib/jobs/job/publishers/aggregate-tests.js');
var Archive = require('../../../lib/jobs/job/publishers/archive.js');
var ArtifactDeployer = require('../../../lib/jobs/job/publishers/artifact-deployer.js');
var BuildPublisher = require('../../../lib/jobs/job/publishers/build-publisher.js');
var CampFire = require('../../../lib/jobs/job/publishers/campfire.js');
var CheckStyle = require('../../../lib/jobs/job/publishers/checkstyle.js');
var Cifs = require('../../../lib/jobs/job/publishers/cifs.js');
var CloneWorkspace = require('../../../lib/jobs/job/publishers/clone-workspace.js');
var CloverPhp = require('../../../lib/jobs/job/publishers/cloverphp.js');
var Cobertura = require('../../../lib/jobs/job/publishers/cobertura.js');
var ConditionalPublisher = require('../../../lib/jobs/job/publishers/conditional-publisher.js');
var CopyToMaster = require('../../../lib/jobs/job/publishers/copy-to-master.js');
var CppCheck = require('../../../lib/jobs/job/publishers/cppcheck.js');
var DescriptionSetter = require('../../../lib/jobs/job/publishers/description-setter.js');
var DownstreamExt = require('../../../lib/jobs/job/publishers/downstream-ext.js');
var Doxygen = require('../../../lib/jobs/job/publishers/doxygen.js');
var Dry = require('../../../lib/jobs/job/publishers/dry.js');
var Email = require('../../../lib/jobs/job/publishers/email.js');
var EmailExt = require('../../../lib/jobs/job/publishers/email-ext.js');
var FindBugs = require('../../../lib/jobs/job/publishers/findbugs.js');
var Fingerprint = require('../../../lib/jobs/job/publishers/fingerprint.js');
var Fitnesse = require('../../../lib/jobs/job/publishers/fitnesse.js');
var Ftp = require('../../../lib/jobs/job/publishers/ftp.js');
var Git = require('../../../lib/jobs/job/publishers/git.js');
var GroovyPostbuild = require('../../../lib/jobs/job/publishers/groovy-postbuild.js');
var HtmlPublisher = require('../../../lib/jobs/job/publishers/html-publisher.js');
var ImageGallery = require('../../../lib/jobs/job/publishers/image-gallery.js');
var IrcBot = require('../../../lib/jobs/job/publishers/ircbot.js');
var Jabber = require('../../../lib/jobs/job/publishers/jabber.js');
var Jacoco = require('../../../lib/jobs/job/publishers/jacoco.js');
var Jclouds = require('../../../lib/jobs/job/publishers/jclouds.js');
var JoinTrigger = require('../../../lib/jobs/job/publishers/join-trigger.js');
var Junit = require('../../../lib/jobs/job/publishers/junit.js');
var LogParser = require('../../../lib/jobs/job/publishers/logparser.js');
var LogStash = require('../../../lib/jobs/job/publishers/logstash.js');
var MavenDeploy = require('../../../lib/jobs/job/publishers/maven-deploy.js');
var Naginator = require('../../../lib/jobs/job/publishers/naginator.js');
var Performance = require('../../../lib/jobs/job/publishers/performance.js');
var Pipeline = require('../../../lib/jobs/job/publishers/pipeline.js');
var Plot = require('../../../lib/jobs/job/publishers/plot.js');
var Pmd = require('../../../lib/jobs/job/publishers/pmd.js');
var PostTasks = require('../../../lib/jobs/job/publishers/post-tasks.js');
var PostbuildScript = require('../../../lib/jobs/job/publishers/postbuildscript.js');
var RichTextPublisher = require('../../../lib/jobs/job/publishers/rich-text-publisher.js');
var Robot = require('../../../lib/jobs/job/publishers/robot.js');
var RubyMetrics = require('../../../lib/jobs/job/publishers/ruby-metrics.js');
var S3 = require('../../../lib/jobs/job/publishers/s3.js');
var ScanBuild = require('../../../lib/jobs/job/publishers/scan-build.js');
var Scoverage = require('../../../lib/jobs/job/publishers/scoverage.js');
var Scp = require('../../../lib/jobs/job/publishers/scp.js');
var ShiningPanda = require('../../../lib/jobs/job/publishers/shining-panda.js');
var SiteMonitor = require('../../../lib/jobs/job/publishers/sitemonitor.js');
var SlocCount = require('../../../lib/jobs/job/publishers/sloccount.js');
var Sonar = require('../../../lib/jobs/job/publishers/sonar.js');
var Ssh = require('../../../lib/jobs/job/publishers/ssh.js');
var Stash = require('../../../lib/jobs/job/publishers/stash.js');
var Tap = require('../../../lib/jobs/job/publishers/tap.js');
var TestNg = require('../../../lib/jobs/job/publishers/testng.js');
var TextFinger = require('../../../lib/jobs/job/publishers/text-finder.js');
var Trigger = require('../../../lib/jobs/job/publishers/trigger.js');
var TriggerParameterizedBuild = require('../../../lib/jobs/job/publishers/trigger-parameterized-build.js');
var Valgrind = require('../../../lib/jobs/job/publishers/valgrind.js');
var Violations = require('../../../lib/jobs/job/publishers/violations.js');
var Warnings = require('../../../lib/jobs/job/publishers/warnings.js');
var WorkspaceCleanup = require('../../../lib/jobs/job/publishers/workspace-cleanup.js');
var XmlSummary = require('../../../lib/jobs/job/publishers/xml-summary.js');
var Xunit = require('../../../lib/jobs/job/publishers/xunit.js');

describe('Publishers', function() {
  describe('constructor', testlib.describeProxyConstructor(Publishers));
  describe('object', testlib.describeProxyUppableAndable(Publishers));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Publishers, 'aggregate-flow-tests', EmptyProxy));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Publishers, 'aggregate-tests', AggregateTests));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Publishers, 'archive', Archive));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Publishers, 'artifact-deployer', ArtifactDeployer));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Publishers, 'blame-upstream', EmptyProxy));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Publishers, 'build-publisher', BuildPublisher));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Publishers, 'campfire', CampFire));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Publishers, 'checkstyle', CheckStyle));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Publishers, 'cifs', Cifs));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Publishers, 'cigame', EmptyProxy));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Publishers, 'claim-build', EmptyProxy));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Publishers, 'clone-workspace', CloneWorkspace));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Publishers, 'cloverphp', CloverPhp));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Publishers, 'cobertura', Cobertura));
  //describe('properties', testlib.describeProxyKeyedArrayProperty(Publishers, 'conditional-publisher', ConditionalPublisher));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Publishers, 'copy-to-master', CopyToMaster));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Publishers, 'cppcheck', CppCheck));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Publishers, 'description-setter', DescriptionSetter));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Publishers, 'display-upstream-changes', EmptyProxy));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Publishers, 'downstream-ext', DownstreamExt));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Publishers, 'doxygen', Doxygen));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Publishers, 'dry', Dry));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Publishers, 'email', Email));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Publishers, 'email-ext', EmailExt));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Publishers, 'emotional-jenkins', EmptyProxy));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Publishers, 'findbugs', FindBugs));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Publishers, 'fingerprint', Fingerprint));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Publishers, 'fitnesse', Fitnesse));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Publishers, 'ftp', Ftp));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Publishers, 'gatling', EmptyProxy));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Publishers, 'git', Git));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Publishers, 'github-notifier', EmptyProxy));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Publishers, 'groovy-postbuild', GroovyPostbuild));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Publishers, 'html-publisher', HtmlPublisher));
  //describe('properties', testlib.describeProxyKeyedArrayProperty(Publishers, 'image-gallery', ImageGallery));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Publishers, 'ircbot', IrcBot));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Publishers, 'jabber', Jabber));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Publishers, 'jacoco', Jacoco));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Publishers, 'jclouds', Jclouds));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Publishers, 'jira', EmptyProxy));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Publishers, 'join-trigger', JoinTrigger));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Publishers, 'junit', Junit));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Publishers, 'logparser', LogParser));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Publishers, 'logstash', LogStash));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Publishers, 'maven-deploy', MavenDeploy));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Publishers, 'naginator', Naginator));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Publishers, 'performance', Performance));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Publishers, 'pipeline', Pipeline));
  //describe('properties', testlib.describeProxyKeyedArrayProperty(Publishers, 'plot', Plot));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Publishers, 'pmd', Pmd));
  //describe('properties', testlib.describeProxyKeyedArrayProperty(Publishers, 'post-tasks', PostTasks));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Publishers, 'postbuildscript', PostbuildScript));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Publishers, 'rich-text-publisher', RichTextPublisher));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Publishers, 'robot', Robot));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Publishers, 'ruby-metrics', RubyMetrics));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Publishers, 's3', S3));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Publishers, 'scan-build', ScanBuild));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Publishers, 'scoverage', Scoverage));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Publishers, 'scp', Scp));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Publishers, 'shining-panda', ShiningPanda));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Publishers, 'sitemonitor', SiteMonitor));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Publishers, 'sloccount', SlocCount));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Publishers, 'sonar', Sonar));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Publishers, 'ssh', Ssh));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Publishers, 'stash', Stash));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Publishers, 'tap', Tap));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Publishers, 'testng', TestNg));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Publishers, 'text-finder', TextFinger));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Publishers, 'trigger', Trigger));
  //describe('properties', testlib.describeProxyKeyedArrayProperty(Publishers, 'trigger-parameterized-builds', TriggerParameterizedBuild));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Publishers, 'valgrind', Valgrind));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Publishers, 'violations', Violations));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Publishers, 'warnings', Warnings));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Publishers, 'workspace-cleanup', WorkspaceCleanup));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Publishers, 'xml-summary', XmlSummary));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Publishers, 'xunit', Xunit));
});
