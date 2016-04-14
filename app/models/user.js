import Model from 'ember-data/model';
import DS from 'ember-data';

export default Model.extend({
  uid: DS.attr(),
  username: DS.attr(),
  avatar: DS.attr(),
  favorites: DS.hasMany('favorite', {async: true})
});
