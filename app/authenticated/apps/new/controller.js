import Ember from 'ember';
import appValidations from 'appy-ui/app/validations';

const { Controller } = Ember;

export default Controller.extend({
	appValidations,

	actions: {
		saveApp (changeset) {
			return changeset.save()
			.then(() => {
				this.transitionToRoute('authenticated.apps');
			})
			.catch(error => {
				console.log(error);
			});
		},

		cancel (changeset) {
			changeset.rollback();
			this.transitionToRoute('authenticated.apps');
		}
	}
});
