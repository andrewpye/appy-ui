import Ember from 'ember';

const { Component, computed, get } = Ember;

export default Component.extend({
	tagName: 'span',
	classNameBindings: [ 'statusClass' ],

	statusClass: computed('app.status', {
		get () {
			const status = get(this, 'app.status');
			return status ? `app-status ${status}` : '';
		}
	})
});
