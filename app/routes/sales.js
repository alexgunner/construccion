import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      categories: this.store.findAll('category'),
      manufacturers: this.store.findAll('manufacturer'),
      publicities: Ember.$.getJSON('http://192.241.176.123/slides.json'),
      variants_discount: Ember.$.getJSON('http://192.241.176.123/variants_in_discount.json')
    });
  },
  actions: {
    addToCart(variant) {
      var item = this.store.createRecord('item', {
        item_product_id: variant['product'].id,
        item_sell_price: variant['product'].product_sell_price,
        item_quantity: 1,
        item_name: variant['product'].product_name,
        item_description: variant['product'].product_description,
        item_variant_id: variant['id']
      });
      item.save();
      this.transitionTo('shopping_cart');
    },
    suscribe() {

      alert("Usted acaba de suscribirse con el correo" + " " + $('#email').val());
    },
    afterSearchProduct(product_name) {
      console.log("El producto es ", product_name);
      this.transitionTo('search', product_name);
    }
  }
});
