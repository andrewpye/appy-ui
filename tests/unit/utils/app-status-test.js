import AppStatus from 'appy-ui/utils/app-status';
import { module, test } from 'qunit';

module('Unit | Utility | app status');

test('defines the required app states', function (assert) {
	assert.equal(AppStatus.draft, 'draft');
	assert.equal(AppStatus.submitted, 'submitted');
	assert.equal(AppStatus.approved, 'approved');
});
