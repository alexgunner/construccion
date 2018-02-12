import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      items: this.store.findAll('reservation'),
      clients: this.store.findAll('cart'),
      reservations: this.store.findAll('product')
    });
  }
});
