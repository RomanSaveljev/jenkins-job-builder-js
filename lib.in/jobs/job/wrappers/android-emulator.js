"use strict";

var util = require('../../../misc/util.js');
var HardwareProperties = require('./android-emulator/hardware-properties.js')

uppableObjectProxy(AndroidEmulator)
primitive(util, AndroidEmulator, 'avd')
primitive(util, AndroidEmulator, 'os')
primitive(util, AndroidEmulator, 'screen-density')
primitive(util, AndroidEmulator, 'screen-resolution')
primitive(util, AndroidEmulator, 'locale')
primitive(util, AndroidEmulator, 'target-abi')
primitive(util, AndroidEmulator, 'sd-card')
primitive(util, AndroidEmulator, 'wipe')
primitive(util, AndroidEmulator, 'show-window')
primitive(util, AndroidEmulator, 'snapshot')
primitive(util, AndroidEmulator, 'delete')
primitive(util, AndroidEmulator, 'startup-delay')
primitive(util, AndroidEmulator, 'commandline-options')
primitive(util, AndroidEmulator, 'exe')
object(util, AndroidEmulator, 'hardware-properties', HardwareProperties)
