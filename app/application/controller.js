import Ember from 'ember';

const { Controller, inject, get } = Ember;

export default Controller.extend({
	session: inject.service(),

	actions: {
		logOut () {
			return get(this, 'session').invalidate()
			.then(() => {
				this.transitionToRoute('login');
			});
		}
	}
});
