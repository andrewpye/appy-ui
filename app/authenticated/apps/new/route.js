import Ember from 'ember';
import { CanMixin } from 'ember-can';
import CurrentUserMixin from 'appy-ui/mixins/current-user';

const { Route, get } = Ember;

export default Route.extend(CanMixin, CurrentUserMixin, {
	beforeModel (transition) {
		if (!this.can('create app'))
		{
			transition.abort();
		}
	},

	model () {
		const store = get(this, 'store');
		return store.createRecord('app', {
			image: store.createRecord('image-file'),
			createdBy: get(this, 'currentUser')
		});
	},

	deactivate () {
		const app = get(this, 'controller.model');
		if (app && get(app, 'isNew'))
		{
			const imageFile = get(app, 'image.content');

			// Unload the records.
			imageFile.rollbackAttributes();
			app.rollbackAttributes();
		}
	}
});
