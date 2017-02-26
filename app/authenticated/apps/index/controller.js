import Ember from 'ember';

const { Controller } = Ember;

export default Controller.extend({
	// OK for this to be a class variable since controllers are singletons.
	appFilterSettings: Ember.Object.create({
		draft: true,
		submitted: true,
		approved: true
	})
});
