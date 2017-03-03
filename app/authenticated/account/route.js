import Ember from 'ember';
import CurrentUserMixin from 'appy-ui/mixins/current-user';

const { Route, get } = Ember;

export default Route.extend(CurrentUserMixin, {
	model () {
		return get(this, 'currentUser');
	},

	actions: {
		onSaveChanges (changeset) {
			return changeset.save();
		},

		onCancelChanges (changeset) {
			changeset.rollback();
		}
	}
});
