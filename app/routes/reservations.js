import Ember from 'ember';

export default Ember.Route.extend({
    model() {
      return this.store.findAll('reservation').then(function(reserves){
        return reserves.get('lastObject');
      });
      return last_reservation;
    },
    actions: {
      depositConfirmation() {
        alert("Nosotros nos contactermos con usted");
        this.transitionTo("index");
      }
    }
});
