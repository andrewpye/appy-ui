import Ember from 'ember';
import appValidations from 'appy-ui/app/validations';
import { task } from 'ember-concurrency';

const { Component, inject, get, set, RSVP: { resolve } } = Ember;

export default Component.extend({
	fileReader: inject.service(),

	appValidations,

	classNames: [ 'app-editor' ],

	submitButtonText: 'Save',

	updateImageFileTask: task(function* (imageFile) {
		const dataUrl = imageFile ? yield get(this, 'fileReader').readBase64Data(imageFile) : null;
		set(this, 'app.image.url', dataUrl);
	}).restartable(),

	saveChangesTask: task(function* (...args) {
		// Wait for any local image loading to finish.
		yield get(this, 'updateImageFileTask.last');
		return yield this._safeFireAction('onSave', ...args);
	}).drop(),

	actions: {
		cancel (...args) {
			get(this, 'updateImageFileTask').cancelAll();
			return this._safeFireAction('onCancel', ...args);
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
