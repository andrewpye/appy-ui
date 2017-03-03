import Ember from 'ember';
import userValidations from 'appy-ui/user/validations';
import { task } from 'ember-concurrency';

const { Component, get, set } = Ember;

export default Component.extend({
	userValidations,

	classNames: [ 'user-editor' ],

	saveChangesTask: task(function* (changeset) {
		return yield this._safeFireAction('onSave', changeset);
	}),

	actions: {
		cancel (changeset) {
			return this._safeFireAction('onCancel', changeset);
		}
	},

	// Fire an action if we were given it, passing all the supplied arguments.
	_safeFireAction (actionName, ...args) {
		const action = get(this, actionName);
		if (action)
		{
			return action(...args);
		}
	}
});
