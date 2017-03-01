import Ember from 'ember';

const { Controller, computed, get } = Ember;

export default Controller.extend({
	// OK for this to be a class variable since controllers are singletons.
	appFilterSettings: Ember.Object.create({
		draft: true,
		submitted: true,
		approved: true
	}),

	filteredApps: computed('model.@each.status', 'appFilterSettings.{draft,submitted,approved}', function () {
		// Filter all apps by status.
		const filterSettings = get(this, 'appFilterSettings');

		return get(this, 'model').filter(app => {
			return get(filterSettings, get(app, 'status'));
		});
	})
});
