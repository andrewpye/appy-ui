import Ember from 'ember';
import { task } from 'ember-concurrency';

const { Component, inject, on, computed, observer, get, set, RSVP } = Ember;

export default Component.extend({
	tagName: 'span',
	classNames: [ 'image-preview' ],

	fileReader: inject.service(),

	_triggerImageLoad: on('didReceiveAttrs', function () {
		if (get(this, 'imageFile.localFile'))
		{
			this._loadLocalImage();
		}
		else if (get(this, 'imageFile.url'))
		{
			this._preloadRemoteImage();
		}
	}),

	// Preview an image from local data if it's available, or from the server.
	src: computed.or('_localSrc', '_remoteSrc'),

	// Local source is just the in-memory file as a data URL.
	_localSrc: computed.alias('imageFile.base64Data'),

	_loadLocalImage: observer('imageFile.localFile', function () {
		// Read the file into memory when the local file changes.
		const localFile = get(this, 'imageFile.localFile') || null;

		get(this, '_loadLocalImageTask').perform(localFile);
	}),

	// Restartable task to preload the remote image.
	_loadLocalImageTask: task(function* (localFile) {
		let dataUrl = null;

		if (localFile)
		{
			dataUrl = yield get(this, 'fileReader').readBase64Data(localFile);
		}

		set(this, '_localSrc', dataUrl);
	}).restartable(),

	// Remote source is the uploaded file on the server after preloading.
	_remoteSrc: null,

	// Restartable task to preload the remote image.
	_preloadRemoteImageTask: task(function* (src) {
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

	_preloadRemoteImage: observer('imageFile.url', function () {
		// Start preloading the image when the URL changes.
		const src = get(this, 'imageFile.url') || null;

		get(this, '_preloadRemoteImageTask').perform(src);
	})
});
