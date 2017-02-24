import Ember from 'ember';
import CurrentUserMixin from 'appy-ui/mixins/current-user';
import { module, test } from 'qunit';

module('Unit | Mixin | current user');

// Replace this with your real tests.
test('it works', function(assert) {
  let CurrentUserObject = Ember.Object.extend(CurrentUserMixin);
  let subject = CurrentUserObject.create();
  assert.ok(subject);
});
