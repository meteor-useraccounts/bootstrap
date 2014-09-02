Package.describe({
    summary: "Accounts Templates styled for Twitter Bootstrap.",
    version: "0.0.23",
    name: "splendido:accounts-templates-bootstrap",
    git: "https://github.com/splendido/accounts-templates-bootstrap.git",
});

Package.on_use(function(api, where) {
    api.use([
        'service-configuration@1.0.0',
        'accounts-base@1.0.0',
        'splendido:accounts-templates-core@0.0.23',
        'templating@1.0.4',
        'less@1.0.5'
    ], 'client');

    api.add_files([
        'lib/at_form.html',
        'lib/at_form.js',
        'lib/at_input.html',
        'lib/at_input.js',
        'lib/at_social.html',
        'lib/at_social.js',
        'lib/full_page_at_form.html',
        'lib/at_bootstrap.less'
    ], ['client']);

    api.use([
        'service-configuration@1.0.0',
        'accounts-password@1.0.0',
        'accounts-base@1.0.0',
        'splendido:accounts-templates-core@0.0.23',
    ], 'server');

    api.imply([
        'splendido:accounts-templates-core@0.0.23',
        'service-configuration',
    ], ['client', 'server']);
});

Package.on_test(function(api) {
    api.use([
        'splendido:accounts-templates-bootstrap',
        'splendido:accounts-templates-core@0.0.23',
    ]);
    api.use(['tinytest', 'test-helpers'], ['client', 'server']);
    api.add_files('tests/accounts-templates-bootstrap_tests.js', ['client', 'server']);
});
