import DS from 'ember-data';

export default DS.Model.extend({
	url: DS.attr('string'),

	// Pointer to a local file before it gets uploaded.
	localFile: null
});
