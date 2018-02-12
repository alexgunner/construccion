import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    searchReserve() {
      var code = this.get("code");
      this.model.reservations.forEach(function(reserve){
        console.log('Reserva: ', reserve.get("id"));
      });
    }
  }
});
