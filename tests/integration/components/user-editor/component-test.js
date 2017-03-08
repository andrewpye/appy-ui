import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';

moduleForComponent('user-editor', 'Integration | Component | user editor', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });
  this.set('dummyUser', Ember.Object.create());
  this.render(hbs`{{user-editor user=dummyUser}}`);

  const text = this.$().text().trim().toLowerCase();
  assert.ok(text.indexOf('name') > -1);
});
