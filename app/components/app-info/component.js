import Ember from 'ember';

const { Component } = Ember;

export default Component.extend({
	classNames: [ 'app-info' ],

	// Default handler to be overridden by attributes.
	onClick () {}
});
