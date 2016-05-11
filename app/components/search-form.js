import Ember from 'ember';
const {get} = Ember;
const { inject } = Ember;

export default Ember.Component.extend({
  authenticate: Ember.inject.service('authenticate'),
  actions: {
    lookupForm() {
      var params = {
        query: this.get('query')
      };
      this.sendAction('lookupForm', params);
    },
  }
});
