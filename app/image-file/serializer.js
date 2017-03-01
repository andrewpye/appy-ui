import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
	// On serialization, map base64Data to image attribute.
	// On deserialization, map image to url.
	keyForAttribute (key, method) {
		switch (method)
		{
			case 'serialize':
				return key === 'base64Data' ? 'image' : this._super(...arguments);

			case 'deserialize':
				return key === 'url' ? 'image' : this._super(...arguments);
		}
	},

	// Don't send url attribute.
	serializeAttribute (snapshot, json, key) {
		switch (key)
		{
			case 'url':
				return;

			default:
				return this._super(...arguments);
		}
	},

	// Un-nest the image URL returned by the backend.
	normalizeSingleResponse () {
		const response = this._super(...arguments);
		const attrs = response.data.attributes;

		if (attrs && attrs.url)
		{
			attrs.url = attrs.url.url || null;
		}

		// Clean up in-memory images.
		attrs.base64Data = null;

		return response;
	}
});
