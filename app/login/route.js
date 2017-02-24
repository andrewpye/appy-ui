import Ember from 'ember';
import UnauthenticatedRouteMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin';

const { Route, get } = Ember;

export default Route.extend(UnauthenticatedRouteMixin, {
	model () {
		return get(this, 'store').findAll('user');
	}
});
