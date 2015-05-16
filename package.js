// Package metadata for Meteor.js web platform (https://www.meteor.com/)
// This file is defined within the Meteor documentation at
//
//   http://docs.meteor.com/#/full/packagejs
//
// and it is needed to define a Meteor package
'use strict';

var Both = ['client', 'server'];
var Client = 'client';

Package.describe({
  summary: 'UserAccounts styled for Twitter Bootstrap.',
  version: '2.0.0',
  name: 'useraccounts:bootstrap',
  git: 'https://github.com/meteor-useraccounts/bootstrap.git',
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.0');

  api.imply([
    'useraccounts:base',
  ], Both);

  api.use([
    'jag:pince@0.0.5',
    'templating',
    'useraccounts:base@2.0.0',
  ], Client);

  api.addFiles([
    'src/_globals.js',
    'src/logger.js',
    'src/skin.js',
  ], Client);
});
