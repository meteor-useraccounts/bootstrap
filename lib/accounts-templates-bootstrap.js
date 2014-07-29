// Simply 'inherites' helpers from AccountsTemplates
Template.signinForm.helpers(AccountsTemplates.signinFormHelpers);
Template.atInput.helpers(AccountsTemplates.atInputHelpers);
Template.atSocial.helpers(AccountsTemplates.atSocialHelpers);

// Simply 'inherites' events from AccountsTemplates
Template.signinForm.events(AccountsTemplates.signinFormEvents);
Template.atInput.events(AccountsTemplates.atInputEvents);
Template.atSocial.events(AccountsTemplates.atSocialEvents);