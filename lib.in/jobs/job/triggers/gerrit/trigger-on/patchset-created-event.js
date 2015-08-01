"use strict";

var util = require('../../../../../misc/util.js');

uppableObjectProxy(PatchsetCreatedEvent)
primitive(util, PatchsetCreatedEvent, 'exclude-drafts')
primitive(util, PatchsetCreatedEvent, 'exclude-trivial-rebase')
primitive(util, PatchsetCreatedEvent, 'exclude-no-code-change')
