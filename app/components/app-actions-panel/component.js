import Ember from 'ember';
import { task } from 'ember-concurrency';

const { Component, get, set } = Ember;

export default Component.extend({
	setAppStatusTask: task(function* (status) {
		const app = get(this, 'app');
		set(app, 'status', status);
		yield app.save();
	}),

	deleteAppTask: task(function* () {
		yield get(this, 'app').destroyRecord();
	})
});
