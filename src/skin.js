/* global
    UserAccounts: false,
    UALog: false
*/
'use strict';

// ------------------------------------------
//  Logs the start of execution for this file
// ------------------------------------------
UALog.trace('Loading main.js');

var
  frameworkName = 'bootstrap',
  frameworkSkin = {
    /*
    uaForm: {
      container: function() {
        return 'ui large fluid segment';
      }
    },
    title: {
      h2: 'ui center aligned dividing header'
    },
    separator: {
      container: 'ui horizontal divider'
    },
    */
    error: {
      container: 'alert alert-danger'
    },
    message: {
      container: 'alert alert-info'
    },
    success: {
      container: 'alert alert-success'
    },
    oauth: {
      button: 'btn'
    },
  }
;


// Add SUI framework to UserAccounts object
UALog.trace('Adding Twitter Bootstrap framework to UserAccounts');
UserAccounts.frameworks.push(frameworkName);
UserAccounts.currentFramework = frameworkName;

// Apply SUI skin to UserAccounts' modules
UALog.trace('Apllying skin to UserAccounts');
UserAccounts.applySkin(frameworkName, frameworkSkin);
