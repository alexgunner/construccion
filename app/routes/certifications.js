import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      categories: this.store.findAll('category'),
      manufacturers: this.store.findAll('manufacturer'),
      publicities: Ember.$.getJSON('http://192.241.176.123/slides.json'),
      certifications: Ember.$.getJSON('http://192.241.176.123/certifications.json')
    });
  },
  actions: {
    afterSearchProduct(product_name) {
      console.log("El producto es ", product_name);
      this.transitionTo('search', product_name);
    }
  }
});
