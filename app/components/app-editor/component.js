import Ember from 'ember';
import appValidations from 'appy-ui/app/validations';

const { Component } = Ember;

export default Component.extend({
	appValidations,

	submitButtonText: 'Save',

	// Default handlers to be overridden by attributes.
	onSave () {},
	onCancel () {}
});
