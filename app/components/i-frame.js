import Ember from 'ember';

const {get} = Ember;
const { inject } = Ember;

export default Ember.Component.extend({
  authenticate: Ember.inject.service('authenticate'),
  favoriteVideo: Ember.inject.service('favorite-video'),

  actions: {
    addFavorite(favoriteId) {
      console.log(favoriteId);
      let sessionName = get(this, 'session.currentUser.username');
      // var params = {
      //   user: this.get('user');
      //   fid: this.get('session.currentUser.username');
      // }
      console.log(sessionName);
      this.get('favoriteVideo').add(favoriteId);
      this.sendAction('addFavorite', sessionName, favoriteId);
    }
  }
});
