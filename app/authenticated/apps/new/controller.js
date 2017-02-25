import Ember from 'ember';
import appValidations from 'appy-ui/app/validations';

const { Controller, get } = Ember;

export default Controller.extend({
	appValidations,

	actions: {
		saveApp () {
			return get(this, 'model').save()
			.then(() => {
				this.transitionToRoute('authenticated.apps');
			});
		}
	}
});
