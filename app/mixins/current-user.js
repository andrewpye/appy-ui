import Ember from 'ember';

const { Mixin, inject, computed, get } = Ember;

export default Mixin.create({
	store: inject.service(),
	session: inject.service(),

	currentUser: computed('session.data.userId', {
		get () {
			const userId = get(this, 'session.data.userId');

			// Current user model will already have been loaded at authentication time.
			return get(this, 'store').peekRecord('user', userId);
		}
	})
});
