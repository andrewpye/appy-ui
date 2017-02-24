import Base from 'ember-simple-auth/authenticators/base';
import Ember from 'ember';

const { inject, assert, RSVP: { resolve }, get, set } = Ember;

export default Base.extend({
	store: inject.service(),
	session: inject.service(),

	authenticate (userId) {
		this._setUserOnSession(userId);
		return resolve();
	},

	restore (userId) {
		this._setUserOnSession(userId);
		return resolve();
	},

	_setUserOnSession (userId) {
		const userModel = get(this, 'store').peekRecord('user', userId);
		assert('authenticator:user-model must be given a valid user ID', userModel);

		// Pin the user model on the session.
		set(this, 'session.data.user', userModel);
	}
});
