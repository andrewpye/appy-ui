import Ember from 'ember';

const { Controller, inject, get } = Ember;

export default Controller.extend({
	session: inject.service(),

	actions: {
		logIn (user) {
			return get(this, 'session').authenticate('authenticator:user-model', get(user, 'id'))
			.then(() => {
				this.transitionToRoute('authenticated');
			});
		}
	}
});
