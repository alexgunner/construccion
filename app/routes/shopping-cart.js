import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      items: this.store.findAll('item'),
      clients: this.store.findAll('client'),
      reservations: this.store.findAll('reservation'),
      banks: Ember.$.getJSON('http://192.241.176.123/bank_accounts.json'),
      payments: Ember.$.getJSON('http://192.241.176.123/payments/1.json')
    });
  },
  actions: {
    afterConfirmation() {
      this.transitionTo('index');
    }
  }
});
