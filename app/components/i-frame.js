import Ember from 'ember';

export default Ember.Component.extend({
  favoriteVideo: Ember.inject.service('favorite-video'),
  addedToFavorite: false,

  actions: {
    addFavorite(favorite) {
      console.log(this.get('favoriteVideo'));
      this.get('favoriteVideo').add(favorite);
      this.set('addedToFavorite', true);
    }
  }
});
