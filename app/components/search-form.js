import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    lookupForm() {
      var params = {
        query: this.get('query')
      };
      this.sendAction('lookupForm', params);
    },
  }
});
