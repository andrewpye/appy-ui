import Ember from 'ember';
import { Ability } from 'ember-can';
import CurrentUserMixin from 'appy-ui/mixins/current-user';

const { computed, get } = Ember;

function isCreator () {
	return computed('currentUser.id', 'model.createdBy.id', function () {
		return get(this, 'currentUser.id') === get(this, 'model.createdBy.id');
	});
}

function roleIs (role) {
	return computed('currentUser.role', function () {
		return get(this, 'currentUser.role') === role;
	});
}

export default Ability.extend(CurrentUserMixin, {
	canCreate: roleIs('developer'),
	canEdit: isCreator(),
	canDelete: isCreator(),
	canPublish: roleIs('developer'),
	canApprove: roleIs('admin')
});
