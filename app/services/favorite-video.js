import Ember from 'ember';

export default Ember.Service.extend({
  videoFavorites: [],

  add(favorite) {
    this.get('videoFavorites').pushObject(favorite);
  },
  remove(favorite) {
    this.get('videoFavorites').pushObject(favorite);
  }
});
