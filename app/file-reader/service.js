import Ember from 'ember';

const { Service, get, RSVP: { reject } } = Ember;

export default Service.extend({
	_cache: {},

	readBase64Data (file) {
		if (!file || typeof file.readAsDataURL !== 'function')
		{
			return reject('You must pass a file to readBase64Data');
		}

		const cache = get(this, '_cache');
		const fileId = get(file, 'id');
		const cachedResult = cache[fileId];
		if (cachedResult)
		{
			return cachedResult;
		}

		return cache[fileId] = file.readAsDataURL();
	}
});
