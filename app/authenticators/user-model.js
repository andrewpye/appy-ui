import Base from 'ember-simple-auth/authenticators/base';
import Ember from 'ember';

const { inject, get, set } = Ember;

export default Base.extend({
	store: inject.service(),
	session: inject.service(),

	authenticate (userId) {
		return this._setUserOnSession(userId)
		.then(() => { return { userId }; });
	},

	restore (data) {
		return this._setUserOnSession(data.userId)
		.then(() => data);
	},

	_setUserOnSession (userId) {
		return get(this, 'store').findRecord('user', userId)
		.then(() => {
			// Pin the user ID on the session so it's accessible throughout the app.
			set(this, 'session.data.userId', userId);
		});
	}
});
