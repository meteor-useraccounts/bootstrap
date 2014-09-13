Package.describe({
    summary: "Accounts Templates styled for Twitter Bootstrap.",
    version: "1.0.0",
    name: "splendido:accounts-templates-bootstrap",
    git: "https://github.com/splendido/accounts-templates-bootstrap.git",
});

Package.on_use(function(api, where) {
    api.use([
        'splendido:accounts-templates-core@1.0.0',
        'templating',
        'less'
    ], 'client');
    api.use([
        'splendido:accounts-templates-core@1.0.0',
    ], 'server');

    api.imply([
        'splendido:accounts-templates-core@1.0.0',
    ], ['client', 'server']);

    api.add_files([
        'lib/at_error.html',
        'lib/at_error.js',
        'lib/at_form.html',
        'lib/at_form.js',
        'lib/at_input.html',
        'lib/at_input.js',
        'lib/at_oauth.html',
        'lib/at_oauth.js',
        'lib/at_pwd_form.html',
        'lib/at_pwd_form.js',
        'lib/at_pwd_form_btn.html',
        'lib/at_pwd_form_btn.js',
        'lib/at_pwd_link.html',
        'lib/at_pwd_link.js',
        'lib/at_result.html',
        'lib/at_result.js',
        'lib/at_sep.html',
        'lib/at_signin_link.html',
        'lib/at_signin_link.js',
        'lib/at_signup_link.html',
        'lib/at_signup_link.js',
        'lib/at_social.html',
        'lib/at_social.js',
        'lib/at_terms_link.html',
        'lib/at_terms_link.js',
        'lib/at_title.html',
        'lib/at_title.js',
        'lib/full_page_at_form.html',
        'lib/at_bootstrap.less'
    ], ['client']);
});

Package.on_test(function(api) {
    api.use([
        'splendido:accounts-templates-bootstrap',
        'splendido:accounts-templates-core@1.0.0',
    ]);
    api.use(['tinytest', 'test-helpers'], ['client', 'server']);
    api.add_files('tests/accounts-templates-bootstrap_tests.js', ['client', 'server']);
});
