// Simply 'inherites' helpers from AccountsUsers
//Template.loginForm.helpers(AccountsUsers.loginFormHelpers);

// Simply 'inherites' events from AccountsUsers
//Template.loginForm.events(AccountsUsers.loginFormEvents);


Template.loginForm.helpers({
    displayField: function() {
        var name = this.name;
        if (name == 'password' && AccountsUsers.getState() !== 'fpwd')
            return true;
        if (name === 'email')
            return true;
        return AccountsUsers.getState() === 'sgup';
    },
    displayFormLabels: function() {
        if (AccountsUsers.ready())
            return AccountsUsers.getConfig('displayFormLabels');
        return false;
    },
    placeholder: function() {
        if (AccountsUsers.ready() && AccountsUsers.getConfig('showPlaceholder'))
            return this.displayName;
        return '';
    },
    fields: function() {
        if (AccountsUsers.ready())
            return AccountsUsers.getFields();
        return [];
    },
    buttonText: function() {
        if (AccountsUsers.getState() === 'sgin') {
            return 'Sign In';
        } else if (AccountsUsers.getState() === 'sgup') {
            return 'Sign Up';
        } else if (AccountsUsers.getState() === 'fpwd') {
            return 'Email Reset Link';
        } else if (AccountsUsers.getState() === 'cpwd') {
            return 'Change Password';
        }
    },
    hasFeedback: function() {
        if (AccountsUsers.ready() && AccountsUsers.getConfig('formValidationFeedback'))
            return 'has-feedback';
        return '';
    },
    hasError: function() {
        if (AccountsUsers.ready() && AccountsUsers.getFieldError(this.name))
            return 'has-error';
        return '';
    },
    showError: function() {
        if (AccountsUsers.ready() && AccountsUsers.getFieldError(this.name))
            return '';
        return 'hide';
    },
    errorText: function() {
        if (AccountsUsers.ready())
            return AccountsUsers.getFieldError(this.name) || '';
        return '';
    },
    aucpwd: function() {
        return AccountsUsers.getState() === 'cpwd';
    },
    aufpwd: function() {
        return AccountsUsers.getState() === 'fpwd';
    },
    ausgin: function() {
        return AccountsUsers.getState() === 'sgin';
    },
    ausgup: function() {
        return AccountsUsers.getState() === 'sgup';
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
    Meteor.call('AccountsUsersValidateField', fieldName, value, function(error, result) {
        console.log('validationResult: ' + result);
        //if (error)
        //    return;
        AccountsUsers.setFieldError(fieldName, result);
    });
};

Template.loginForm.events({
    'keyup input': function(event) {
        if (AccountsUsers.ready() && AccountsUsers.getConfig('continuousValidation'))
            validateField(event);
    },
    'focusout input': function(event) {
        if (AccountsUsers.ready() && !AccountsUsers.getConfig('continuousValidation'))
            validateField(event);
    },
    'click #au-fpwd': function(event) {
        event.preventDefault();
        AccountsUsers.setState('fpwd');
    },
    'click #au-sgin': function(event) {
        event.preventDefault();
        AccountsUsers.setState('sgin');
    },
    'click #au-sgup': function(event) {
        event.preventDefault();
        AccountsUsers.setState('sgup');
    },
    'click #au-btn': function(event) {

    },
});


Template.auSocial.helpers({
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