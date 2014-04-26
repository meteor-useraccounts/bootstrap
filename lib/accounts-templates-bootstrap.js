// Simply 'inherites' helpers from AccountsTemplates
//Template.loginForm.helpers(AccountsTemplates.loginFormHelpers);

// Simply 'inherites' events from AccountsTemplates
//Template.loginForm.events(AccountsTemplates.loginFormEvents);


Template.loginForm.helpers({
    displayField: function() {
        var name = this.name;
        if (name === 'login')
            return true;
        if (name == 'password' && AccountsTemplates.getState() !== 'fpwd')
            return true;
        return AccountsTemplates.getState() === 'sgup';
    },
    displayFormLabels: function() {
        if (AccountsTemplates.ready())
            return AccountsTemplates.getConfig('displayFormLabels');
        return false;
    },
    placeholder: function() {
        if (AccountsTemplates.ready() && AccountsTemplates.getConfig('showPlaceholders'))
            return this.displayName;
        return '';
    },
    fields: function() {
        if (AccountsTemplates.ready())
            return AccountsTemplates.getFields();
        return [];
    },
    buttonText: function() {
        if (AccountsTemplates.getState() === 'sgin') {
            return 'Sign In';
        } else if (AccountsTemplates.getState() === 'sgup') {
            return 'Sign Up';
        } else if (AccountsTemplates.getState() === 'fpwd') {
            return 'Email Reset Link';
        } else if (AccountsTemplates.getState() === 'cpwd') {
            return 'Change Password';
        }
    },
    hasFeedback: function() {
        if (AccountsTemplates.ready() && AccountsTemplates.getConfig('formValidationFeedback'))
            return 'has-feedback';
        return '';
    },
    hasError: function() {
        if (AccountsTemplates.ready() && AccountsTemplates.getFieldError(this.name))
            return 'has-error';
        return '';
    },
    showError: function() {
        if (AccountsTemplates.ready() && AccountsTemplates.getFieldError(this.name))
            return '';
        return 'hide';
    },
    errorText: function() {
        if (AccountsTemplates.ready())
            return AccountsTemplates.getFieldError(this.name) || '';
        return '';
    },
    atcpwd: function() {
        return AccountsTemplates.getState() === 'cpwd';
    },
    atfpwd: function() {
        return AccountsTemplates.getState() === 'fpwd';
    },
    atsgin: function() {
        return AccountsTemplates.getState() === 'sgin';
    },
    atsgup: function() {
        return AccountsTemplates.getState() === 'sgup';
    },
    otherLoginServices: function() {
        return Accounts.oauth && Accounts.oauth.serviceNames().length > 0;
    },
    loginServices: function() {
        return Accounts.oauth.serviceNames();
    },
    passwordLoginService: function() {
        return !!Package['accounts-password'];
    }
});

var validateField = function(event) {
    var currTarg = event.currentTarget;
    var value = currTarg.value;
    var fieldName = currTarg.id.slice(9); // Skips 'AU_field_'
    console.log(fieldName + ': ' + value);
    Meteor.call('AccountsTemplatesValidateField', fieldName, value, function(error, result) {
        console.log('validationResult: ' + result);
        //if (error)
        //    return;
        AccountsTemplates.setFieldError(fieldName, result);
    });
};

Template.loginForm.events({
    'keyup input': function(event) {
        if (AccountsTemplates.ready() && AccountsTemplates.getConfig('continuousValidation'))
            validateField(event);
    },
    'focusout input': function(event) {
        if (AccountsTemplates.ready() && !AccountsTemplates.getConfig('continuousValidation'))
            validateField(event);
    },
    'click #at-fpwd': function(event) {
        event.preventDefault();
        AccountsTemplates.setState('fpwd');
    },
    'click #at-sgin': function(event) {
        event.preventDefault();
        AccountsTemplates.setState('sgin');
    },
    'click #at-sgup': function(event) {
        event.preventDefault();
        AccountsTemplates.setState('sgup');
    },
    'click #at-btn': function(event) {

    },
});


Template.atSocial.helpers({
    capitalize: function(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    },
    google: function() {
        if (this[0] === 'g' && this[1] === 'o')
            return true;
    },
    unconfigured: function() {
        return Accounts.loginServiceConfiguration.find({
            service: this.toString()
        }).fetch().length === 0;
    }
});