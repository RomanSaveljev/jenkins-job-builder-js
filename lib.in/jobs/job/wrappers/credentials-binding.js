"use strict";

var util = require('../../../misc/util.js');
var Credential = require('./credentials-binding/credential.js');

uppableArrayProxy(CredentialsBinding)
keyedObjectElement(util, CredentialsBinding, 'zip-file', Credential)
keyedObjectElement(util, CredentialsBinding, 'file', Credential)
keyedObjectElement(util, CredentialsBinding, 'username-password', Credential)
keyedObjectElement(util, CredentialsBinding, 'text', Credential)
