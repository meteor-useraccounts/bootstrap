Package.describe({
    summary: "Users' Accounts Systems templates styled for Twitter Bootstrap."
});

Package.on_use(function(api, where) {
	api.imply('accounts-users-core', ['client', 'server']);
    api.use(['templating'], 'client');
    api.add_files([
        'lib/accounts-users-bootstrap.html',
        'lib/accounts-users-bootstrap.js'
    ], ['client']);
});

Package.on_test(function(api) {
    api.use('accounts-users-bootstrap');
    api.use(['tinytest', 'test-helpers'], ['client', 'server']);
    api.add_files('tests/accounts-users-bootstrap_tests.js', ['client', 'server']);
});