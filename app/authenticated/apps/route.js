import Ember from 'ember';

const { Route, get, set } = Ember;

export default Route.extend({
	model () {
		return get(this, 'store').findAll('app');
	},

	actions: {
		onEditApp (app) {},

		onDeleteApp (app) {
			return app.destroyRecord();
		},

		onSetAppStatus (app, status) {
			set(app, 'status', status);
			return app.save();
		}
	}
});
