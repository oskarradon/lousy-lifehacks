import Ember from 'ember';

const { get } = Ember;

export default Ember.Route.extend({
  // beforeModel(){
  //   return get(this, 'session').fetch().catch(function(){});
  // },
  authenticate: Ember.inject.service('authenticate'),
  actions: {
    lookupForm(params) {
      this.transitionTo('results', params.query);
    },
  }
});
