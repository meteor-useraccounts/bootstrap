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
      button: 'btn btn-block'
    },
  }
;


// Apply SUI skin to UserAccounts' modules
UALog.trace('Apllying Twitter Bootstrap skin to UserAccounts');
UserAccounts.applySkin(frameworkName, frameworkSkin);
