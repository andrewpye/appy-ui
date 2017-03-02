import Ember from 'ember';
import { task } from 'ember-concurrency';

const { Component, on, computed, observer, get, set, RSVP } = Ember;

export default Component.extend({
	tagName: 'span',
	classNames: [ 'image-preview' ],

	// This is needed to trigger initial image loading in some cases.
	_triggerImageLoad: on('init', function () {
		this._loadImage();
	}),

	src: null,

	_loadImage: observer('imageFile.{url,version}', function () {
		get(this, '_preloadImageTask').perform();
	}),

	// Restartable task to preload an image.
	// Also gives us a "loading" state.
	_preloadImageTask: task(function* () {
		const imageFile = get(this, 'imageFile');
		if (!imageFile)
		{
			return;
		}

		let url = get(imageFile, 'url');
		if (!url)
		{
			return;
		}

		// Build the image URL, using the version as a cachebreaker.
		if (!this._isDataUrl(url))
		{
			const version = get(imageFile, 'version');
			if (version)
			{
				url += `?version=${version}`; 
			}
		}

		// Try preloading the image.
		try
		{
			yield this._preloadImage(url);
			set(this, 'src', url);
		}
		catch (error)
		{
			// Loading failed, so nullify the source.
			set(this, 'src', null);
		}
	}).restartable(),

	_preloadImage (src) {
		return new RSVP.Promise((resolve, reject) => {
			const image = new Image();
			image.onload = resolve;
			image.onerror = reject;
			image.src = src;
		});
	},

	_isLoading: computed.reads('_preloadImageTask.isRunning'),

	_isDataUrl (url) {
		return url && url.indexOf('data:') === 0;
	}
});
