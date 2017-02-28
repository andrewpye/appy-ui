import Ember from 'ember';
import { task } from 'ember-concurrency';

const { Component, computed, observer, get, set, RSVP } = Ember;

export default Component.extend({
	tagName: 'span',
	attributeBindings: [ 'src' ],

	// Preview an image from local data if it's available, or from the server.
	src: computed.or('_localSrc', '_remoteSrc'),

	// Local source is just the in-memory file as a data URL.
	_localSrc: computed.alias('imageFile.base64Data'),

	// Remote source is the uploaded file on the server after preloading.
	_remoteSrc: null,

	// Restartable task to preload the remote image.
	_preloadImageTask: task(function* (src) {
		if (src)
		{
			yield new RSVP.Promise((resolve, reject) => {
				const image = new Image();
				image.onload = resolve;
				image.onerror = reject;
				image.src = src;
			});
		}

		set(this, '_remoteSrc', src);
	}).restartable(),

	_preloadImage: observer('imageFile.url', function () {
		// Start preloading the image when the URL changes.
		const src = get(this, 'imageFile.url') || null;

		get(this, '_preloadImageTask').perform(src);
	})
});
