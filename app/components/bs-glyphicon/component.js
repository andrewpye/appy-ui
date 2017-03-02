import Ember from 'ember';

const { Component, computed, get } = Ember;

export default Component.extend({
	tagName: 'span',
	classNames: [ 'glyphicon' ],
	classNameBindings: [ 'glyphName', 'spin:glyphicon-spin' ],

	glyphName: computed('icon', {
		get () {
			const icon = get(this, 'icon');
			return icon ? `glyphicon-${icon}` : '';
		}
	})
});
