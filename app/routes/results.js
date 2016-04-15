import Ember from 'ember';
const {get} = Ember;
const { inject } = Ember;

export default Ember.Route.extend({
  authenticate: Ember.inject.service('authenticate'),
  model: function(params) {
    var url = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=3&order=date&q=" + params.query + "lifehack&key=AIzaSyARsAKkRYUFn5_CsH19dR-kfJf9foLW0i4";
    return Ember.$.getJSON(url).then(function(responseJSON) {
      console.log(responseJSON.items[0].id.videoId);
      return responseJSON.items;
    });
  },

  actions: {
    lookupForm(params) {
      this.transitionTo('results', params.query);
    },
    addFavorite(sessionName){

      this.createRecord
    }
  }
});
