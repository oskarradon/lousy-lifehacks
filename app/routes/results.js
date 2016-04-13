import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var url = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&order=date&q=" + params.query + "how+to&type=video&videoCaption=closedCaption&key=AIzaSyARsAKkRYUFn5_CsH19dR-kfJf9foLW0i4";
    return Ember.$.getJSON(url).then(function(responseJSON) {
      console.log(responseJSON.items[0].id.videoId);
      return responseJSON.items;
    });
  },
  afterModel: function() {

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
    },

  actions: {

  }
});
