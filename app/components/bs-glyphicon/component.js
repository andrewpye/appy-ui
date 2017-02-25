import Ember from 'ember';

const { Component, computed, get } = Ember;

export default Component.extend({
	tagName: 'span',
	classNames: [ 'glyphicon' ],
	classNameBindings: [ 'glyphName' ],

	glyphName: computed('icon', {
		get () {
			return `glyphicon-${get(this, 'icon')}`;
		}
	})
});
