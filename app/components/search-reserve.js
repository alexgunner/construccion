import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    searchReserve() {
      var reserve_code = this.get('reservation_code');
      console.log("La reserva es:", reserve_code);
      this.sendAction('afterSearch', reserve_code);
    }
  }
});
