import Ember from 'ember';
const {get} = Ember;

export default Ember.Route.extend({
  beforeModel(){
    return get(this, 'session').fetch().catch(function(){});
  },
  model(){
    return this.store.findAll('favorite');
  },
  actions:{
    login(){
      get(this, 'session').open('firebase', {provider: 'google'}).then(function(data) {
        console.log(data);
      });
    },
    logout(){
      get(this, 'session').close();
    }
  }
});
