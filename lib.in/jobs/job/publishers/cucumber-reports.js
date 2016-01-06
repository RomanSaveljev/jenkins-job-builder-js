"use strict";

var util = require('../../../misc/util.js');

uppableObjectProxy(CucumberReports)
primitive(util, CucumberReports, 'json-reports-path')
primitive(util, CucumberReports, 'file-include-pattern')
primitive(util, CucumberReports, 'file-exclude-pattern')
primitive(util, CucumberReports, 'plugin-url-path')
primitive(util, CucumberReports, 'skipped-fails')
primitive(util, CucumberReports, 'pending-fails')
primitive(util, CucumberReports, 'undefined-fails')
primitive(util, CucumberReports, 'missing-fails')
primitive(util, CucumberReports, 'no-flash-charts')
primitive(util, CucumberReports, 'ignore-failed-tests')
primitive(util, CucumberReports, 'parallel-testing')
