import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return Ember.RSVP.hash({
      categories: this.store.findAll('category'),
      manufacturers: this.store.findAll('manufacturer'),
      publicities: Ember.$.getJSON('http://192.241.176.123/slides.json'),
      reserve: Ember.$.getJSON('http://192.241.176.123/get_reservation/' + params.reserve_code)
    });
  },
  actions: {
    afterSearchReserve(reserve_code) {
      console.log("La reserva es: ", reserve_code);
      this.transitionTo('find_reserve', reserve_code);
    },
    depositConfirmation() {
      alert("Imagen exitosamente subida");
      this.transitionTo('index');
    }
  }
});
