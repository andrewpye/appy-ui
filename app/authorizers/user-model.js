import BaseAuthorizer from 'ember-simple-auth/authorizers/base';

export default BaseAuthorizer.extend({
	authorize (sessionData, block) {
		// Send the user ID in a header so the backend knows who's making a request.
		block('User-Id', sessionData.userId);
	}
});
