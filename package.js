Package.describe({
  summary: "Users' Accounts Systems templates styled for Twitter Bootstrap."
});

Package.on_use(function (api, where) {
  api.add_files('lib/accounts-users-bootstrap.js', ['client', 'server']);
});

Package.on_test(function(api) {
  api.use('accounts-users-bootstrap');
  api.use(['tinytest', 'test-helpers'], ['client', 'server']);
  api.add_files('tests/accounts-users-bootstrap_tests.js', ['client', 'server']);
});
