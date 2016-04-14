import Ember from 'ember';
const {get} = Ember;

export default Ember.Service.extend({
  beforeModel(){
    return get(this, 'session').fetch().catch(function(){});
  }

});
