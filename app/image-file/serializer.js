import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
	// Map image (server-side) to url (client-side).
	keyForAttribute (key, method) {
		return key === 'url' ? 'image' : this._super(...arguments);
	},

	// Un-nest the image URL returned by the backend.
	normalizeSingleResponse () {
		const response = this._super(...arguments);
		const attrs = response.data.attributes;

		if (attrs && attrs.url)
		{
			attrs.url = attrs.url.url || null;
		}

		return response;
	}
});
