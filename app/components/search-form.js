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
