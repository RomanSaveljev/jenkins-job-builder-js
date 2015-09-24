'use strict';
var util$915 = require('../../misc/util.js');
var AggregateFlowTests$916 = require('../../misc/empty-proxy.js');
var AggregateTests$917 = require('./publishers/aggregate-tests.js');
var Archive$918 = require('./publishers/archive.js');
var ArtifactDeployer$919 = require('./publishers/artifact-deployer.js');
var BlameUpstream$920 = require('../../misc/empty-proxy.js');
var BuildPublisher$921 = require('./publishers/build-publisher.js');
var Campfire$922 = require('./publishers/campfire.js');
var CheckStyle$923 = require('./publishers/checkstyle.js');
var Cifs$924 = require('./publishers/cifs.js');
var Cigame$925 = require('../../misc/empty-proxy.js');
var ClaimBuild$926 = require('../../misc/empty-proxy.js');
var CloneWorkspace$927 = require('./publishers/clone-workspace.js');
var Cloverphp$928 = require('./publishers/cloverphp.js');
var Cobertura$929 = require('./publishers/cobertura.js');
var ConditionalPublisher$930 = require('./publishers/conditional-publisher.js');
var CopyToMaster$931 = require('./publishers/copy-to-master.js');
var CppCheck$932 = require('./publishers/cppcheck.js');
var DescriptionSetter$933 = require('./publishers/description-setter.js');
var DisplayUpstreamChanges$934 = require('../../misc/empty-proxy.js');
var DownstreamExt$935 = require('./publishers/downstream-ext.js');
var Doxygen$936 = require('./publishers/doxygen.js');
var Dry$937 = require('./publishers/dry.js');
var Email$938 = require('./publishers/email.js');
var EmailExt$939 = require('./publishers/email-ext.js');
var EmotionalJenkins$940 = require('../../misc/empty-proxy.js');
var FindBugs$941 = require('./publishers/findbugs.js');
var FingerPrint$942 = require('./publishers/fingerprint.js');
var Fitnesse$943 = require('./publishers/fitnesse.js');
var Ftp$944 = require('./publishers/ftp.js');
var Gatling$945 = require('../../misc/empty-proxy.js');
var Git$946 = require('./publishers/git.js');
var GithubNotifier$947 = require('../../misc/empty-proxy.js');
var GroovyPostbuild$948 = require('./publishers/groovy-postbuild.js');
var HtmlPublisher$949 = require('./publishers/html-publisher.js');
var ImageGallery$950 = require('./publishers/image-gallery.js');
var IrcBot$951 = require('./publishers/ircbot.js');
var Jabber$952 = require('./publishers/jabber.js');
var Jacoco$953 = require('./publishers/jacoco.js');
var Jclouds$954 = require('./publishers/jclouds.js');
var Jira$955 = require('../../misc/empty-proxy.js');
var JoinTrigger$956 = require('./publishers/join-trigger.js');
var Junit$957 = require('./publishers/junit.js');
var LogParser$958 = require('./publishers/logparser.js');
var LogStash$959 = require('./publishers/logstash.js');
var MavenDeploy$960 = require('./publishers/maven-deploy.js');
var Naginator$961 = require('./publishers/naginator.js');
var Performance$962 = require('./publishers/performance.js');
var Pipeline$963 = require('./publishers/pipeline.js');
var Plot$964 = require('./publishers/plot.js');
var Pmd$965 = require('./publishers/pmd.js');
var PostTasks$966 = require('./publishers/post-tasks.js');
var PostBuildScript$967 = require('./publishers/postbuildscript.js');
var RichTextPublisher$968 = require('./publishers/rich-text-publisher.js');
var Robot$969 = require('./publishers/robot.js');
var RubyMetrics$970 = require('./publishers/ruby-metrics.js');
var S3$971 = require('./publishers/s3.js');
var ScanBuild$972 = require('./publishers/scan-build.js');
var Scoverage$973 = require('./publishers/scoverage.js');
var Scp$974 = require('./publishers/scp.js');
var ShiningPanda$975 = require('./publishers/shining-panda.js');
var SiteMonitor$976 = require('./publishers/sitemonitor.js');
var SlocCount$977 = require('./publishers/sloccount.js');
var Sonar$978 = require('./publishers/sonar.js');
var Ssh$979 = require('./publishers/ssh.js');
var Stash$980 = require('./publishers/stash.js');
var Tap$981 = require('./publishers/tap.js');
var TestNg$982 = require('./publishers/testng.js');
var TextFinder$983 = require('./publishers/text-finder.js');
var Trigger$984 = require('./publishers/trigger.js');
var TriggerParameterizedBuild$985 = require('./publishers/trigger-parameterized-build.js');
var Valgrind$986 = require('./publishers/valgrind.js');
var Violations$987 = require('./publishers/violations.js');
var Warnings$988 = require('./publishers/warnings.js');
var WorkspaceCleanup$989 = require('./publishers/workspace-cleanup.js');
var XmlSummary$990 = require('./publishers/xml-summary.js');
var Xunit$991 = require('./publishers/xunit.js');
var Publishers$993 = function (upper$1070, array$1071) {
    this.upper = upper$1070;
    this.array = array$1071;
};
Publishers$993.prototype.up = function () {
    return this.upper;
};
Publishers$993.prototype.and = Publishers$993.prototype.up;
module.exports = Publishers$993;
Publishers$993.prototype[util$915.camelize('aggregate-flow-tests')] = function (value$1072) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'aggregate-flow-tests',
        AggregateFlowTests$916,
        value$1072
    ]);
};
Publishers$993.prototype[util$915.camelize('aggregate-tests')] = function (value$1073) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'aggregate-tests',
        AggregateTests$917,
        value$1073
    ]);
};
Publishers$993.prototype[util$915.camelize('archive')] = function (value$1074) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'archive',
        Archive$918,
        value$1074
    ]);
};
Publishers$993.prototype[util$915.camelize('artifact-deployer')] = function (value$1075) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'artifact-deployer',
        ArtifactDeployer$919,
        value$1075
    ]);
};
Publishers$993.prototype[util$915.camelize('blame-upstream')] = function (value$1076) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'blame-upstream',
        BlameUpstream$920,
        value$1076
    ]);
};
Publishers$993.prototype[util$915.camelize('build-publisher')] = function (value$1077) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'build-publisher',
        BuildPublisher$921,
        value$1077
    ]);
};
Publishers$993.prototype[util$915.camelize('campfire')] = function (value$1078) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'campfire',
        Campfire$922,
        value$1078
    ]);
};
Publishers$993.prototype[util$915.camelize('checkstyle')] = function (value$1079) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'checkstyle',
        CheckStyle$923,
        value$1079
    ]);
};
Publishers$993.prototype[util$915.camelize('cifs')] = function (value$1080) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'cifs',
        Cifs$924,
        value$1080
    ]);
};
Publishers$993.prototype[util$915.camelize('cigame')] = function (value$1081) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'cigame',
        Cigame$925,
        value$1081
    ]);
};
Publishers$993.prototype[util$915.camelize('claim-build')] = function (value$1082) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'claim-build',
        ClaimBuild$926,
        value$1082
    ]);
};
Publishers$993.prototype[util$915.camelize('clone-workspace')] = function (value$1083) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'clone-workspace',
        CloneWorkspace$927,
        value$1083
    ]);
};
Publishers$993.prototype[util$915.camelize('cloverphp')] = function (value$1084) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'cloverphp',
        Cloverphp$928,
        value$1084
    ]);
};
Publishers$993.prototype[util$915.camelize('cobertura')] = function (value$1085) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'cobertura',
        Cobertura$929,
        value$1085
    ]);
};
Publishers$993.prototype[util$915.camelize('conditional-publisher')] = function (value$1086) {
    return util$915.keyedArrayElementAccessor.apply(this, [
        'conditional-publisher',
        ConditionalPublisher$930,
        value$1086
    ]);
};
Publishers$993.prototype[util$915.camelize('copy-to-master')] = function (value$1087) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'copy-to-master',
        CopyToMaster$931,
        value$1087
    ]);
};
Publishers$993.prototype[util$915.camelize('cppcheck')] = function (value$1088) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'cppcheck',
        CppCheck$932,
        value$1088
    ]);
};
Publishers$993.prototype[util$915.camelize('description-setter')] = function (value$1089) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'description-setter',
        DescriptionSetter$933,
        value$1089
    ]);
};
Publishers$993.prototype[util$915.camelize('display-upstream-changes')] = function (value$1090) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'display-upstream-changes',
        DisplayUpstreamChanges$934,
        value$1090
    ]);
};
Publishers$993.prototype[util$915.camelize('downstream-ext')] = function (value$1091) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'downstream-ext',
        DownstreamExt$935,
        value$1091
    ]);
};
Publishers$993.prototype[util$915.camelize('doxygen')] = function (value$1092) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'doxygen',
        Doxygen$936,
        value$1092
    ]);
};
Publishers$993.prototype[util$915.camelize('dry')] = function (value$1093) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'dry',
        Dry$937,
        value$1093
    ]);
};
Publishers$993.prototype[util$915.camelize('email')] = function (value$1094) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'email',
        Email$938,
        value$1094
    ]);
};
Publishers$993.prototype[util$915.camelize('email-ext')] = function (value$1095) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'email-ext',
        EmailExt$939,
        value$1095
    ]);
};
Publishers$993.prototype[util$915.camelize('emotional-jenkins')] = function (value$1096) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'emotional-jenkins',
        EmotionalJenkins$940,
        value$1096
    ]);
};
Publishers$993.prototype[util$915.camelize('findbugs')] = function (value$1097) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'findbugs',
        FindBugs$941,
        value$1097
    ]);
};
Publishers$993.prototype[util$915.camelize('fingerprint')] = function (value$1098) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'fingerprint',
        FingerPrint$942,
        value$1098
    ]);
};
Publishers$993.prototype[util$915.camelize('fitnesse')] = function (value$1099) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'fitnesse',
        Fitnesse$943,
        value$1099
    ]);
};
Publishers$993.prototype[util$915.camelize('ftp')] = function (value$1100) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'ftp',
        Ftp$944,
        value$1100
    ]);
};
Publishers$993.prototype[util$915.camelize('gatling')] = function (value$1101) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'gatling',
        Gatling$945,
        value$1101
    ]);
};
Publishers$993.prototype[util$915.camelize('git')] = function (value$1102) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'git',
        Git$946,
        value$1102
    ]);
};
Publishers$993.prototype[util$915.camelize('github-notifier')] = function (value$1103) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'github-notifier',
        GithubNotifier$947,
        value$1103
    ]);
};
Publishers$993.prototype[util$915.camelize('groovy-postbuild')] = function (value$1104) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'groovy-postbuild',
        GroovyPostbuild$948,
        value$1104
    ]);
};
Publishers$993.prototype[util$915.camelize('html-publisher')] = function (value$1105) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'html-publisher',
        HtmlPublisher$949,
        value$1105
    ]);
};
Publishers$993.prototype[util$915.camelize('image-gallery')] = function (value$1106) {
    return util$915.keyedArrayElementAccessor.apply(this, [
        'image-gallery',
        ImageGallery$950,
        value$1106
    ]);
};
Publishers$993.prototype[util$915.camelize('ircbot')] = function (value$1107) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'ircbot',
        IrcBot$951,
        value$1107
    ]);
};
Publishers$993.prototype[util$915.camelize('jabber')] = function (value$1108) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'jabber',
        Jabber$952,
        value$1108
    ]);
};
Publishers$993.prototype[util$915.camelize('jacoco')] = function (value$1109) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'jacoco',
        Jacoco$953,
        value$1109
    ]);
};
Publishers$993.prototype[util$915.camelize('jclouds')] = function (value$1110) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'jclouds',
        Jclouds$954,
        value$1110
    ]);
};
Publishers$993.prototype[util$915.camelize('jira')] = function (value$1111) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'jira',
        Jira$955,
        value$1111
    ]);
};
Publishers$993.prototype[util$915.camelize('join-trigger')] = function (value$1112) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'join-trigger',
        JoinTrigger$956,
        value$1112
    ]);
};
Publishers$993.prototype[util$915.camelize('junit')] = function (value$1113) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'junit',
        Junit$957,
        value$1113
    ]);
};
Publishers$993.prototype[util$915.camelize('logparser')] = function (value$1114) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'logparser',
        LogParser$958,
        value$1114
    ]);
};
Publishers$993.prototype[util$915.camelize('logstash')] = function (value$1115) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'logstash',
        LogStash$959,
        value$1115
    ]);
};
Publishers$993.prototype[util$915.camelize('maven-deploy')] = function (value$1116) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'maven-deploy',
        MavenDeploy$960,
        value$1116
    ]);
};
Publishers$993.prototype[util$915.camelize('naginator')] = function (value$1117) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'naginator',
        Naginator$961,
        value$1117
    ]);
};
Publishers$993.prototype[util$915.camelize('performance')] = function (value$1118) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'performance',
        Performance$962,
        value$1118
    ]);
};
Publishers$993.prototype[util$915.camelize('pipeline')] = function (value$1119) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'pipeline',
        Pipeline$963,
        value$1119
    ]);
};
Publishers$993.prototype[util$915.camelize('plot')] = function (value$1120) {
    return util$915.keyedArrayElementAccessor.apply(this, [
        'plot',
        Plot$964,
        value$1120
    ]);
};
Publishers$993.prototype[util$915.camelize('pmd')] = function (value$1121) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'pmd',
        Pmd$965,
        value$1121
    ]);
};
Publishers$993.prototype[util$915.camelize('post-tasks')] = function (value$1122) {
    return util$915.keyedArrayElementAccessor.apply(this, [
        'post-tasks',
        PostTasks$966,
        value$1122
    ]);
};
Publishers$993.prototype[util$915.camelize('postbuildscript')] = function (value$1123) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'postbuildscript',
        PostBuildScript$967,
        value$1123
    ]);
};
Publishers$993.prototype[util$915.camelize('rich-text-publisher')] = function (value$1124) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'rich-text-publisher',
        RichTextPublisher$968,
        value$1124
    ]);
};
Publishers$993.prototype[util$915.camelize('robot')] = function (value$1125) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'robot',
        Robot$969,
        value$1125
    ]);
};
Publishers$993.prototype[util$915.camelize('ruby-metrics')] = function (value$1126) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'ruby-metrics',
        RubyMetrics$970,
        value$1126
    ]);
};
Publishers$993.prototype[util$915.camelize('s3')] = function (value$1127) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        's3',
        S3$971,
        value$1127
    ]);
};
Publishers$993.prototype[util$915.camelize('scan-build')] = function (value$1128) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'scan-build',
        ScanBuild$972,
        value$1128
    ]);
};
Publishers$993.prototype[util$915.camelize('scoverage')] = function (value$1129) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'scoverage',
        Scoverage$973,
        value$1129
    ]);
};
Publishers$993.prototype[util$915.camelize('scp')] = function (value$1130) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'scp',
        Scp$974,
        value$1130
    ]);
};
Publishers$993.prototype[util$915.camelize('shining-panda')] = function (value$1131) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'shining-panda',
        ShiningPanda$975,
        value$1131
    ]);
};
Publishers$993.prototype[util$915.camelize('sitemonitor')] = function (value$1132) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'sitemonitor',
        SiteMonitor$976,
        value$1132
    ]);
};
Publishers$993.prototype[util$915.camelize('sloccount')] = function (value$1133) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'sloccount',
        SlocCount$977,
        value$1133
    ]);
};
Publishers$993.prototype[util$915.camelize('sonar')] = function (value$1134) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'sonar',
        Sonar$978,
        value$1134
    ]);
};
Publishers$993.prototype[util$915.camelize('ssh')] = function (value$1135) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'ssh',
        Ssh$979,
        value$1135
    ]);
};
Publishers$993.prototype[util$915.camelize('stash')] = function (value$1136) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'stash',
        Stash$980,
        value$1136
    ]);
};
Publishers$993.prototype[util$915.camelize('tap')] = function (value$1137) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'tap',
        Tap$981,
        value$1137
    ]);
};
Publishers$993.prototype[util$915.camelize('testng')] = function (value$1138) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'testng',
        TestNg$982,
        value$1138
    ]);
};
Publishers$993.prototype[util$915.camelize('text-finder')] = function (value$1139) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'text-finder',
        TextFinder$983,
        value$1139
    ]);
};
Publishers$993.prototype[util$915.camelize('trigger')] = function (value$1140) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'trigger',
        Trigger$984,
        value$1140
    ]);
};
Publishers$993.prototype[util$915.camelize('trigger-parameterized-builds')] = function (value$1141) {
    return util$915.keyedArrayElementAccessor.apply(this, [
        'trigger-parameterized-builds',
        TriggerParameterizedBuild$985,
        value$1141
    ]);
};
Publishers$993.prototype[util$915.camelize('valgrind')] = function (value$1142) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'valgrind',
        Valgrind$986,
        value$1142
    ]);
};
Publishers$993.prototype[util$915.camelize('violations')] = function (value$1143) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'violations',
        Violations$987,
        value$1143
    ]);
};
Publishers$993.prototype[util$915.camelize('warnings')] = function (value$1144) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'warnings',
        Warnings$988,
        value$1144
    ]);
};
Publishers$993.prototype[util$915.camelize('workspace-cleanup')] = function (value$1145) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'workspace-cleanup',
        WorkspaceCleanup$989,
        value$1145
    ]);
};
Publishers$993.prototype[util$915.camelize('xml-summary')] = function (value$1146) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'xml-summary',
        XmlSummary$990,
        value$1146
    ]);
};
Publishers$993.prototype[util$915.camelize('xunit')] = function (value$1147) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'xunit',
        Xunit$991,
        value$1147
    ]);
};