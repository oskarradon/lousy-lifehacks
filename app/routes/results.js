import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var url = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q="
    + params.query + "&type=video&videoCaption=closedCaption&key=AIzaSyARsAKkRYUFn5_CsH19dR-kfJf9foLW0i4";
    return Ember.$.getJSON(url).then(function(responseJSON) {
      console.log(responseJSON);
      return responseJSON.results;
    });
  },

  actions: {
    
  }
});
