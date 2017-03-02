import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';

const { run, set } = Ember;

moduleForComponent('app-status-indicator', 'Integration | Component | app status indicator', {
  integration: true
});

test('it renders app status as text', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });
  const dummyApp = Ember.Object.create({
    status: 'submitted'
  });
  this.set('dummyApp', dummyApp);
  this.render(hbs`{{app-status-indicator app=dummyApp}}`);

  assert.equal(this.$().text().trim().toLowerCase(), 'submitted');

  run(() => set(dummyApp, 'status', 'accepted'));
  assert.equal(this.$().text().trim().toLowerCase(), 'accepted');
});
