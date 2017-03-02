import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';

moduleForComponent('app-editor', 'Integration | Component | app editor', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });
  this.set('dummyApp', Ember.Object.create());
  this.render(hbs`{{app-editor app=dummyApp}}`);

  const text = this.$().text().trim().toLowerCase();
  assert.ok(text.indexOf('name') > -1);
  assert.ok(text.indexOf('description') > -1);
  assert.ok(text.indexOf('image') > -1);
});
