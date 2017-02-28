import Ember from 'ember';
import DS from 'ember-data';

const { inject, get, set } = Ember;

export default DS.Model.extend({
	fileReader: inject.service(),

	// URL to access file after upload.
	url: DS.attr(),

	// Local data for use before/during upload.
	base64Data: DS.attr('string', { defaultValue: null }),

	// Pointer to a local file before it gets uploaded.
	localFile: null,

	save () {
		const _super = this._super;

		// Ensure the data's loaded as base64 before saving.
		return get(this, 'fileReader').readBase64Data(get(this, 'localFile'))
		.then(base64Data => {
			set(this, 'base64Data', base64Data);
			return _super.apply(this, arguments);
		});
	}
});
