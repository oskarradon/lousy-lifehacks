import Ember from 'ember';

const {get} = Ember;
const { inject } = Ember;

export default Ember.Component.extend({
  authenticate: Ember.inject.service('authenticate'),
  favoriteVideo: Ember.inject.service('favorite-video'),

  actions: {
    addFavorite(favoriteId) {
      this.get('favoriteVideo').add(favoriteId);
    }
  }
});
