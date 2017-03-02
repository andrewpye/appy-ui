import { moduleForModel, test } from 'ember-qunit';

moduleForModel('app', 'Unit | Model | app', {
  needs: [ 'model:user', 'model:image-file', 'util:app-status' ]
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
