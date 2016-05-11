import Ember from 'ember';

const { get } = Ember;
const { inject } = Ember;

export default Ember.Component.extend({
  authenticate: Ember.inject.service('authenticate'),
  favoriteVideo: Ember.inject.service('favorite-video'),
  addedToFavorite: false,

  actions: {
    addFavorite(favorite) {
      this.get('favoriteVideo').add(favorite);
      this.set('addedToFavorite', true);
    }
  }
});
