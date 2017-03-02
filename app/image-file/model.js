import Ember from 'ember';
import DS from 'ember-data';

const { inject, get, set, RSVP: { resolve } } = Ember;

export default DS.Model.extend({
	// This attribute has two roles:
	//  - in-memory image loaded from local file as a data URL to upload to server.
	//  - URL to remote file on server.
	url: DS.attr(),

	// Version from the backend, used as a cachebreaker when updating an image.
	version: DS.attr('number')
});
