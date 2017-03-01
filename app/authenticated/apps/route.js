import Ember from 'ember';

const { Route, get, set } = Ember;

export default Route.extend({
	model () {
		return get(this, 'store').findAll('app');
	},

	actions: {
		onSaveAppChanges (app, changeset) {
			// Save the image file if needed.
			return get(app, 'image')
			.then(imageFile => {
				return imageFile.save();
			})
			.then(() => {
				return changeset.save()
				.then(() => this.transitionTo('authenticated.apps'));
			})
			.catch(error => {
				// TODO: display error.
				console.log(error);
			});
		},

		onCancelAppChanges (app, changeset) {
			// Nullify the local file on the image file model.
			return get(app, 'image')
			.then(imageFile => {
				set(imageFile, 'localFile', null);

				changeset.rollback();
				this.transitionTo('authenticated.apps');
			});
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
