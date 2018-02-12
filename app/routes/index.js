import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      products: this.store.findAll('product'),
      categories: this.store.findAll('category'),
      manufacturers: this.store.findAll('manufacturer'),
      publicities: Ember.$.getJSON('http://192.241.176.123/slides.json'),
      variants_discount: Ember.$.getJSON('http://192.241.176.123/variants_in_discount.json')
    });
  },
  actions: {
    addToCart(product, variant) {
      var item = this.store.createRecord('item', {
        item_product_id: product.get('id'),
        item_sell_price: product.get('product_sell_price'),
        item_quantity: 1,
        item_name: product.get('product_name'),
        item_description: product.get('product_description'),
        item_variant_id: variant.get('id')
      });
      item.save();

      this.transitionTo('shopping_cart');
    },
    afterSearchProduct(product_name) {
      console.log("El producto es ", product_name);
      this.transitionTo('search', product_name);
    }
  }

});
