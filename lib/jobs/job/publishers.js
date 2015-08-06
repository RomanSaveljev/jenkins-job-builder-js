'use strict';
var util$890 = require('../../misc/util.js');
var AggregateFlowTests$891 = require('../../misc/empty-proxy.js');
var AggregateTests$892 = require('./publishers/aggregate-tests.js');
var Archive$893 = require('./publishers/archive.js');
var ArtifactDeployer$894 = require('./publishers/artifact-deployer.js');
var BlameUpstream$895 = require('../../misc/empty-proxy.js');
var BuildPublisher$896 = require('./publishers/build-publisher.js');
var Campfire$897 = require('./publishers/campfire.js');
var CheckStyle$898 = require('./publishers/checkstyle.js');
var Cifs$899 = require('./publishers/cifs.js');
var Cigame$900 = require('../../misc/empty-proxy.js');
var ClaimBuild$901 = require('../../misc/empty-proxy.js');
var CloneWorkspace$902 = require('./publishers/clone-workspace.js');
var Cloverphp$903 = require('./publishers/cloverphp.js');
var Cobertura$904 = require('./publishers/cobertura.js');
var ConditionalPublisher$905 = require('./publishers/conditional-publisher.js');
var CopyToMaster$906 = require('./publishers/copy-to-master.js');
var CppCheck$907 = require('./publishers/cppcheck.js');
var DescriptionSetter$908 = require('./publishers/description-setter.js');
var DisplayUpstreamChanges$909 = require('../../misc/empty-proxy.js');
var DownstreamExt$910 = require('./publishers/downstream-ext.js');
var Doxygen$911 = require('./publishers/doxygen.js');
var Dry$912 = require('./publishers/dry.js');
var Email$913 = require('./publishers/email.js');
var EmailExt$914 = require('./publishers/email-ext.js');
var EmotionalJenkins$915 = require('../../misc/empty-proxy.js');
var FindBugs$916 = require('./publishers/findbugs.js');
var FingerPrint$917 = require('./publishers/fingerprint.js');
var Fitnesse$918 = require('./publishers/fitnesse.js');
var Ftp$919 = require('./publishers/ftp.js');
var Gatling$920 = require('../../misc/empty-proxy.js');
var Git$921 = require('./publishers/git.js');
var GithubNotifier$922 = require('../../misc/empty-proxy.js');
var GroovyPostbuild$923 = require('./publishers/groovy-postbuild.js');
var HtmlPublisher$924 = require('./publishers/html-publisher.js');
var ImageGallery$925 = require('./publishers/image-gallery.js');
var IrcBot$926 = require('./publishers/ircbot.js');
var Jabber$927 = require('./publishers/jabber.js');
var Jacoco$928 = require('./publishers/jacoco.js');
var Jclouds$929 = require('./publishers/jclouds.js');
var Jira$930 = require('../../misc/empty-proxy.js');
var JoinTrigger$931 = require('./publishers/join-trigger.js');
var Junit$932 = require('./publishers/junit.js');
var LogParser$933 = require('./publishers/logparser.js');
var LogStash$934 = require('./publishers/logstash.js');
var MavenDeploy$935 = require('./publishers/maven-deploy.js');
var Naginator$936 = require('./publishers/naginator.js');
var Performance$937 = require('./publishers/performance.js');
var Pipeline$938 = require('./publishers/pipeline.js');
var Plot$939 = require('./publishers/plot.js');
var Pmd$940 = require('./publishers/pmd.js');
var PostTasks$941 = require('./publishers/post-tasks.js');
var PostBuildScript$942 = require('./publishers/postbuildscript.js');
var RichTextPublisher$943 = require('./publishers/rich-text-publisher.js');
var Robot$944 = require('./publishers/robot.js');
var RubyMetrics$945 = require('./publishers/ruby-metrics.js');
var S3$946 = require('./publishers/s3.js');
var ScanBuild$947 = require('./publishers/scan-build.js');
var Scoverage$948 = require('./publishers/scoverage.js');
var Scp$949 = require('./publishers/scp.js');
var ShiningPanda$950 = require('./publishers/shining-panda.js');
var SiteMonitor$951 = require('./publishers/sitemonitor.js');
var SlocCount$952 = require('./publishers/sloccount.js');
var Sonar$953 = require('./publishers/sonar.js');
var Ssh$954 = require('./publishers/ssh.js');
var Stash$955 = require('./publishers/stash.js');
var Tap$956 = require('./publishers/tap.js');
var TestNg$957 = require('./publishers/testng.js');
var TextFinder$958 = require('./publishers/text-finder.js');
var Trigger$959 = require('./publishers/trigger.js');
var TriggerParameterizedBuild$960 = require('./publishers/trigger-parameterized-build.js');
var Valgrind$961 = require('./publishers/valgrind.js');
var Violations$962 = require('./publishers/violations.js');
var Warnings$963 = require('./publishers/warnings.js');
var WorkspaceCleanup$964 = require('./publishers/workspace-cleanup.js');
var XmlSummary$965 = require('./publishers/xml-summary.js');
var Xunit$966 = require('./publishers/xunit.js');
var Publishers$968 = function (upper$1045, array$1046) {
    this.upper = upper$1045;
    this.array = array$1046;
};
Publishers$968.prototype.up = function () {
    return this.upper;
};
Publishers$968.prototype.and = Publishers$968.prototype.up;
module.exports = Publishers$968;
Publishers$968.prototype[util$890.camelize('aggregate-flow-tests')] = function (value$1047) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'aggregate-flow-tests',
        AggregateFlowTests$891,
        value$1047
    ]);
};
Publishers$968.prototype[util$890.camelize('aggregate-tests')] = function (value$1048) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'aggregate-tests',
        AggregateTests$892,
        value$1048
    ]);
};
Publishers$968.prototype[util$890.camelize('archive')] = function (value$1049) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'archive',
        Archive$893,
        value$1049
    ]);
};
Publishers$968.prototype[util$890.camelize('artifact-deployer')] = function (value$1050) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'artifact-deployer',
        ArtifactDeployer$894,
        value$1050
    ]);
};
Publishers$968.prototype[util$890.camelize('blame-upstream')] = function (value$1051) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'blame-upstream',
        BlameUpstream$895,
        value$1051
    ]);
};
Publishers$968.prototype[util$890.camelize('build-publisher')] = function (value$1052) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'build-publisher',
        BuildPublisher$896,
        value$1052
    ]);
};
Publishers$968.prototype[util$890.camelize('campfire')] = function (value$1053) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'campfire',
        Campfire$897,
        value$1053
    ]);
};
Publishers$968.prototype[util$890.camelize('checkstyle')] = function (value$1054) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'checkstyle',
        CheckStyle$898,
        value$1054
    ]);
};
Publishers$968.prototype[util$890.camelize('cifs')] = function (value$1055) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'cifs',
        Cifs$899,
        value$1055
    ]);
};
Publishers$968.prototype[util$890.camelize('cigame')] = function (value$1056) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'cigame',
        Cigame$900,
        value$1056
    ]);
};
Publishers$968.prototype[util$890.camelize('claim-build')] = function (value$1057) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'claim-build',
        ClaimBuild$901,
        value$1057
    ]);
};
Publishers$968.prototype[util$890.camelize('clone-workspace')] = function (value$1058) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'clone-workspace',
        CloneWorkspace$902,
        value$1058
    ]);
};
Publishers$968.prototype[util$890.camelize('cloverphp')] = function (value$1059) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'cloverphp',
        Cloverphp$903,
        value$1059
    ]);
};
Publishers$968.prototype[util$890.camelize('cobertura')] = function (value$1060) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'cobertura',
        Cobertura$904,
        value$1060
    ]);
};
Publishers$968.prototype[util$890.camelize('conditional-publisher')] = function (value$1061) {
    return util$890.keyedArrayElementAccessor.apply(this, [
        'conditional-publisher',
        ConditionalPublisher$905,
        value$1061
    ]);
};
Publishers$968.prototype[util$890.camelize('copy-to-master')] = function (value$1062) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'copy-to-master',
        CopyToMaster$906,
        value$1062
    ]);
};
Publishers$968.prototype[util$890.camelize('cppcheck')] = function (value$1063) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'cppcheck',
        CppCheck$907,
        value$1063
    ]);
};
Publishers$968.prototype[util$890.camelize('description-setter')] = function (value$1064) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'description-setter',
        DescriptionSetter$908,
        value$1064
    ]);
};
Publishers$968.prototype[util$890.camelize('display-upstream-changes')] = function (value$1065) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'display-upstream-changes',
        DisplayUpstreamChanges$909,
        value$1065
    ]);
};
Publishers$968.prototype[util$890.camelize('downstream-ext')] = function (value$1066) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'downstream-ext',
        DownstreamExt$910,
        value$1066
    ]);
};
Publishers$968.prototype[util$890.camelize('doxygen')] = function (value$1067) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'doxygen',
        Doxygen$911,
        value$1067
    ]);
};
Publishers$968.prototype[util$890.camelize('dry')] = function (value$1068) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'dry',
        Dry$912,
        value$1068
    ]);
};
Publishers$968.prototype[util$890.camelize('email')] = function (value$1069) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'email',
        Email$913,
        value$1069
    ]);
};
Publishers$968.prototype[util$890.camelize('email-ext')] = function (value$1070) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'email-ext',
        EmailExt$914,
        value$1070
    ]);
};
Publishers$968.prototype[util$890.camelize('emotional-jenkins')] = function (value$1071) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'emotional-jenkins',
        EmotionalJenkins$915,
        value$1071
    ]);
};
Publishers$968.prototype[util$890.camelize('findbugs')] = function (value$1072) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'findbugs',
        FindBugs$916,
        value$1072
    ]);
};
Publishers$968.prototype[util$890.camelize('fingerprint')] = function (value$1073) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'fingerprint',
        FingerPrint$917,
        value$1073
    ]);
};
Publishers$968.prototype[util$890.camelize('fitnesse')] = function (value$1074) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'fitnesse',
        Fitnesse$918,
        value$1074
    ]);
};
Publishers$968.prototype[util$890.camelize('ftp')] = function (value$1075) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'ftp',
        Ftp$919,
        value$1075
    ]);
};
Publishers$968.prototype[util$890.camelize('gatling')] = function (value$1076) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'gatling',
        Gatling$920,
        value$1076
    ]);
};
Publishers$968.prototype[util$890.camelize('git')] = function (value$1077) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'git',
        Git$921,
        value$1077
    ]);
};
Publishers$968.prototype[util$890.camelize('github-notifier')] = function (value$1078) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'github-notifier',
        GithubNotifier$922,
        value$1078
    ]);
};
Publishers$968.prototype[util$890.camelize('groovy-postbuild')] = function (value$1079) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'groovy-postbuild',
        GroovyPostbuild$923,
        value$1079
    ]);
};
Publishers$968.prototype[util$890.camelize('html-publisher')] = function (value$1080) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'html-publisher',
        HtmlPublisher$924,
        value$1080
    ]);
};
Publishers$968.prototype[util$890.camelize('image-gallery')] = function (value$1081) {
    return util$890.keyedArrayElementAccessor.apply(this, [
        'image-gallery',
        ImageGallery$925,
        value$1081
    ]);
};
Publishers$968.prototype[util$890.camelize('ircbot')] = function (value$1082) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'ircbot',
        IrcBot$926,
        value$1082
    ]);
};
Publishers$968.prototype[util$890.camelize('jabber')] = function (value$1083) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'jabber',
        Jabber$927,
        value$1083
    ]);
};
Publishers$968.prototype[util$890.camelize('jacoco')] = function (value$1084) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'jacoco',
        Jacoco$928,
        value$1084
    ]);
};
Publishers$968.prototype[util$890.camelize('jclouds')] = function (value$1085) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'jclouds',
        Jclouds$929,
        value$1085
    ]);
};
Publishers$968.prototype[util$890.camelize('jira')] = function (value$1086) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'jira',
        Jira$930,
        value$1086
    ]);
};
Publishers$968.prototype[util$890.camelize('join-trigger')] = function (value$1087) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'join-trigger',
        JoinTrigger$931,
        value$1087
    ]);
};
Publishers$968.prototype[util$890.camelize('junit')] = function (value$1088) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'junit',
        Junit$932,
        value$1088
    ]);
};
Publishers$968.prototype[util$890.camelize('logparser')] = function (value$1089) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'logparser',
        LogParser$933,
        value$1089
    ]);
};
Publishers$968.prototype[util$890.camelize('logstash')] = function (value$1090) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'logstash',
        LogStash$934,
        value$1090
    ]);
};
Publishers$968.prototype[util$890.camelize('maven-deploy')] = function (value$1091) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'maven-deploy',
        MavenDeploy$935,
        value$1091
    ]);
};
Publishers$968.prototype[util$890.camelize('naginator')] = function (value$1092) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'naginator',
        Naginator$936,
        value$1092
    ]);
};
Publishers$968.prototype[util$890.camelize('performance')] = function (value$1093) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'performance',
        Performance$937,
        value$1093
    ]);
};
Publishers$968.prototype[util$890.camelize('pipeline')] = function (value$1094) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'pipeline',
        Pipeline$938,
        value$1094
    ]);
};
Publishers$968.prototype[util$890.camelize('plot')] = function (value$1095) {
    return util$890.keyedArrayElementAccessor.apply(this, [
        'plot',
        Plot$939,
        value$1095
    ]);
};
Publishers$968.prototype[util$890.camelize('pmd')] = function (value$1096) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'pmd',
        Pmd$940,
        value$1096
    ]);
};
Publishers$968.prototype[util$890.camelize('post-tasks')] = function (value$1097) {
    return util$890.keyedArrayElementAccessor.apply(this, [
        'post-tasks',
        PostTasks$941,
        value$1097
    ]);
};
Publishers$968.prototype[util$890.camelize('postbuildscript')] = function (value$1098) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'postbuildscript',
        PostBuildScript$942,
        value$1098
    ]);
};
Publishers$968.prototype[util$890.camelize('rich-text-publisher')] = function (value$1099) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'rich-text-publisher',
        RichTextPublisher$943,
        value$1099
    ]);
};
Publishers$968.prototype[util$890.camelize('robot')] = function (value$1100) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'robot',
        Robot$944,
        value$1100
    ]);
};
Publishers$968.prototype[util$890.camelize('ruby-metrics')] = function (value$1101) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'ruby-metrics',
        RubyMetrics$945,
        value$1101
    ]);
};
Publishers$968.prototype[util$890.camelize('s3')] = function (value$1102) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        's3',
        S3$946,
        value$1102
    ]);
};
Publishers$968.prototype[util$890.camelize('scan-build')] = function (value$1103) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'scan-build',
        ScanBuild$947,
        value$1103
    ]);
};
Publishers$968.prototype[util$890.camelize('scoverage')] = function (value$1104) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'scoverage',
        Scoverage$948,
        value$1104
    ]);
};
Publishers$968.prototype[util$890.camelize('scp')] = function (value$1105) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'scp',
        Scp$949,
        value$1105
    ]);
};
Publishers$968.prototype[util$890.camelize('shining-panda')] = function (value$1106) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'shining-panda',
        ShiningPanda$950,
        value$1106
    ]);
};
Publishers$968.prototype[util$890.camelize('sitemonitor')] = function (value$1107) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'sitemonitor',
        SiteMonitor$951,
        value$1107
    ]);
};
Publishers$968.prototype[util$890.camelize('sloccount')] = function (value$1108) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'sloccount',
        SlocCount$952,
        value$1108
    ]);
};
Publishers$968.prototype[util$890.camelize('sonar')] = function (value$1109) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'sonar',
        Sonar$953,
        value$1109
    ]);
};
Publishers$968.prototype[util$890.camelize('ssh')] = function (value$1110) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'ssh',
        Ssh$954,
        value$1110
    ]);
};
Publishers$968.prototype[util$890.camelize('stash')] = function (value$1111) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'stash',
        Stash$955,
        value$1111
    ]);
};
Publishers$968.prototype[util$890.camelize('tap')] = function (value$1112) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'tap',
        Tap$956,
        value$1112
    ]);
};
Publishers$968.prototype[util$890.camelize('testng')] = function (value$1113) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'testng',
        TestNg$957,
        value$1113
    ]);
};
Publishers$968.prototype[util$890.camelize('text-finder')] = function (value$1114) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'text-finder',
        TextFinder$958,
        value$1114
    ]);
};
Publishers$968.prototype[util$890.camelize('trigger')] = function (value$1115) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'trigger',
        Trigger$959,
        value$1115
    ]);
};
Publishers$968.prototype[util$890.camelize('trigger-parameterized-builds')] = function (value$1116) {
    return util$890.keyedArrayElementAccessor.apply(this, [
        'trigger-parameterized-builds',
        TriggerParameterizedBuild$960,
        value$1116
    ]);
};
Publishers$968.prototype[util$890.camelize('valgrind')] = function (value$1117) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'valgrind',
        Valgrind$961,
        value$1117
    ]);
};
Publishers$968.prototype[util$890.camelize('violations')] = function (value$1118) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'violations',
        Violations$962,
        value$1118
    ]);
};
Publishers$968.prototype[util$890.camelize('warnings')] = function (value$1119) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'warnings',
        Warnings$963,
        value$1119
    ]);
};
Publishers$968.prototype[util$890.camelize('workspace-cleanup')] = function (value$1120) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'workspace-cleanup',
        WorkspaceCleanup$964,
        value$1120
    ]);
};
Publishers$968.prototype[util$890.camelize('xml-summary')] = function (value$1121) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'xml-summary',
        XmlSummary$965,
        value$1121
    ]);
};
Publishers$968.prototype[util$890.camelize('xunit')] = function (value$1122) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'xunit',
        Xunit$966,
        value$1122
    ]);
};