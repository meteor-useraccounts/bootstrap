Package.describe({
    summary: "Users' Accounts Systems templates styled for Twitter Bootstrap."
});

Package.on_use(function(api, where) {
    api.use([
        'templating',
        'less'
    ], 'client');

    api.add_files([
        'lib/accounts-users-bootstrap.html',
        'lib/accounts-users-bootstrap.js',
        'lib/accounts-users-bootstrap.less'
    ], ['client']);

    api.use([
        'service-configuration',
        'accounts-base',
    ], ['client', 'server']);

    api.imply([
        'service-configuration',
        'accounts-base',
        'accounts-users-core'
    ], ['client', 'server']);
});

Package.on_test(function(api) {
    api.use('accounts-users-bootstrap');
    api.use(['tinytest', 'test-helpers'], ['client', 'server']);
    api.add_files('tests/accounts-users-bootstrap_tests.js', ['client', 'server']);
});