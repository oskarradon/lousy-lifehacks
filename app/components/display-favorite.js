import Ember from 'ember';

export default Ember.Component.extend({
  favoriteVideo: Ember.inject.service('favorite-video'),
});
