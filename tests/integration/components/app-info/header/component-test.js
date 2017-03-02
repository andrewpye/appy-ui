import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';

moduleForComponent('app-info/header', 'Integration | Component | app info/header', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.set('dummyApp', Ember.Object.create({
    name: 'Dummy App'
  }));
  this.render(hbs`{{app-info/header app=dummyApp}}`);

  const text = this.$().text().trim().toLowerCase();
  assert.ok(text.indexOf('dummy app') > -1);
});
