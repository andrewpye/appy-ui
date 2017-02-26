import Ember from 'ember';

const { Component } = Ember;

export default Component.extend({
	tagName: 'span',

	// Default handlers to be overridden by attributes.
	onEditApp () {},
	onDeleteApp () {},
	onSetAppStatus () {}
});
