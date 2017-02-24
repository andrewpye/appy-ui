import Ember from 'ember';
import CurrentUserMixin from 'appy-ui/mixins/current-user';

const { Controller } = Ember;

export default Controller.extend(CurrentUserMixin);
