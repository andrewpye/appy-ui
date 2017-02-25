import Ember from 'ember';
import CurrentUserMixin from 'appy-ui/mixins/current-user';

const { Route, get } = Ember;

export default Route.extend(CurrentUserMixin, {
	model () {
		return get(this, 'store').createRecord('app', {
			createdBy: get(this, 'currentUser')
		});
	},

	deactivate () {
		const model = get(this, 'controller.model');
		if (model && get(model, 'isNew'))
		{
			// Unload the record.
			model.rollbackAttributes();
		}
	}
});
