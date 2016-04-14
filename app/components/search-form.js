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

// import Ember from 'ember';
//
// export default Ember.Component.extend({
//   actions: {
//     lookupForm() {
//       var params = {
//         query: this.get('query').replace(/\s/g, "+")
//       };
//       console.log(params.query);
//       this.sendAction('lookupForm', params);
//     },
//   }
// });
