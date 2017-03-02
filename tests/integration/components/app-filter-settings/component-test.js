import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('app-filter-settings', 'Integration | Component | app filter settings', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{app-filter-settings}}`);

  const text = this.$().text().trim().toLowerCase();
  assert.ok(text.indexOf('submitted') > -1);
});
