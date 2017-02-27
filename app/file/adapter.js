import Ember from 'ember';
import DS from 'ember-data';
import config from 'appy-ui/config/environment';

const { get, RSVP: { resolve } } = Ember;

export default DS.JSONAPIAdapter.extend({
	config,

	createRecord (store, type, snapshot) {
		// If there's a local file attached to the model, we need to upload it.
		const localFile = get(snapshot, 'record.localFile');
		const uploadFile = localFile ? localFile.upload(get(this, 'config.api.fileUploadUrl')) : resolve();

		return uploadFile.then(uploadResponse => {
			if (uploadResponse)
			{
				// Set the returned URL on the model before saving it.
				debugger;
			}

			return this._super(...arguments);
		});
	}
});
