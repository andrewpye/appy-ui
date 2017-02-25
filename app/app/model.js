import DS from 'ember-data';
import AppStatus from 'appy-ui/utils/app-status';

export default DS.Model.extend({
	name: DS.attr('string'),
	description: DS.attr('string'),
	status: DS.attr('string', { defaultValue: AppStatus.draft }),

	createdBy: DS.belongsTo('user')
});
