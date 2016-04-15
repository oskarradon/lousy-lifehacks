import Ember from 'ember';
const {get} = Ember;
const { inject } = Ember;

export default Ember.Route.extend({
  authenticate: Ember.inject.service('authenticate'),
  model: function(params) {
    var url = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=3&order=date&q=" + params.query + "lifehack+how+to&key=AIzaSyARsAKkRYUFn5_CsH19dR-kfJf9foLW0i4";
    return Ember.$.getJSON(url).then(function(responseJSON) {
      if (responseJSON.items.length < 1) {
        alert('Try a new search term');
      } else {
        return responseJSON.items;
      }

    });
  },

  actions: {
    lookupForm(params) {
      this.transitionTo('results', params.query);
    },
    addFavorite(sessionName){
      this.createRecord;
    }
  }
});
