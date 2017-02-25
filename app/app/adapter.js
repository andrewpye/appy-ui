import ApplicationAdapter from 'appy-ui/application/adapter';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

export default ApplicationAdapter.extend(DataAdapterMixin, {
	authorizer: 'authorizer:user-model'
});
