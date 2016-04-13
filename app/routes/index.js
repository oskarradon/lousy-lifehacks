import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    lookupForm(params) {
      this.transitionTo('results', params.query);
    },
  }
});
