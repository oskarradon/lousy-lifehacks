import Ember from 'ember';

const {get} = Ember;
const { inject } = Ember;

export default Ember.Component.extend({
  authenticate: Ember.inject.service('authenticate'),
  favoriteVideo: Ember.inject.service('favorite-video'),

  actions: {
    addFavorite(favorite) {
      console.log(this.get('favoriteVideo'));
      this.get('favoriteVideo').add(favorite);
    }
  }
});
