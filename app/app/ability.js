import Ember from 'ember';
import { Ability } from 'ember-can';
import CurrentUserMixin from 'appy-ui/mixins/current-user';

const { computed, get } = Ember;

function allEqual (requirements) {
	const dependentKeys = [];

	for (const propName in requirements)
	{
		dependentKeys.push(propName);
	}

	return computed(...dependentKeys, function () {
		for (const propName in requirements)
		{
			if (get(this, propName) !== requirements[propName])
			{
				return false;
			}

			return true;
		}
	});
}

export default Ability.extend(CurrentUserMixin, {
	canDelete: computed('currentUser.id', 'model.createdBy.id', function () {
		return get(this, 'currentUser.id') === get(this, 'model.createdBy.id');
	}),

	canPublish: allEqual({
		'currentUser.role': 'developer',
		'model.status': 'draft'
	}),

	canApprove: allEqual({
		'currentUser.role': 'admin',
		'model.status': 'submitted'
	})
});
