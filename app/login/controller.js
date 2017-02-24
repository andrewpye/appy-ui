import Ember from 'ember';

const { Controller } = Ember;

export default Controller.extend({
	actions: {
		selectUser (user) {
			console.log(`chose user ${user.get('name')}`);
		}
	}
});
