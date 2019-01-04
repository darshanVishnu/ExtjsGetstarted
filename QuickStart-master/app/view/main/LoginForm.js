/**
 * Demonstrates a simple login form.
 */
Ext.define('QuickStart.view.main.LoginForm', {
    extend: 'Ext.form.Panel',
    xtype: 'form-login',

    title: 'Login',
    frame:true,
    width: 320,
    bodyPadding: 10,

    defaultType: 'textfield',

    items: [{
        xtype: 'textfield',
        name: 'firstname',
        label: 'First Name',
    }, {
        xtype: 'textfield',
        name: 'lastname',
        label: 'Last Name',
    }, {
        xtype: 'textfield',
        name: 'phonenumber',
        label: 'Phone Number'
    }],

    buttons: [
        { text:'Register' },
        { text:'Login' }
    ],

    defaults: {
        anchor: '100%',
        labelWidth: 100
    }
});