import Ember from 'ember';

export default Ember.Service.extend({
  videoFavorites: [],

  add(favorite) {
    this.get('videoFavorites').pushObject(favorite);
  },
  remove(favorite) {
    this.get('videoFavorites').pushObject(favorite);
  },
  include(favorite) {
    return this.get('videoFavorites').includes(favorite);
  }
});
