import Ember from 'ember';

const { Route, get, set } = Ember;

export default Route.extend({
	model () {
		return get(this, 'store').findAll('app');
	},

	actions: {
 		onSaveAppChanges (changeset) {
 			const savePromise = changeset.save();
 			this.transitionTo('authenticated.apps');

 			return savePromise;
 		},

 		onCancelAppChanges (changeset) {
 			changeset.rollback();
 			this.transitionTo('authenticated.apps');
 		},

		onEditApp (app) {
			this.transitionTo('authenticated.apps.edit', app);
		},

		onDeleteApp (app) {
			return app.destroyRecord();
		},

		onSetAppStatus (app, status) {
			set(app, 'status', status);
			return app.save();
		}
	}
});
