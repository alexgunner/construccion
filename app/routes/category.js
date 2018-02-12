import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return Ember.RSVP.hash({
      categories: this.store.findAll('category'),
      category: this.store.findRecord('category', params.category_id),
      manufacturers: this.store.findAll('manufacturer'),
      publicities: Ember.$.getJSON('http://192.241.176.123/slides.json')
    });
  },
  actions: {
    addToCart(product, variant) {
      var sell_price = variant.get('variant_sell_price');
      if (variant.get('promotion_price') != null && variant.get('promotion_price') != "") {
        sell_price = variant.get('promotion_price');
      }
      var item = this.store.createRecord('item', {
        item_product_id: product.get('id'),
        item_sell_price: sell_price,
        item_quantity: 1,
        item_name: product.get('product_name'),
        item_description: product.get('product_description'),
        item_variant_id: variant.get('id')
      });
      item.save();
      var class_to_hide = ".cart-button-" + product.id + variant.id;
      var class_to_show = ".variant-" + product.id + variant.id;
      Ember.$(class_to_hide).hide();
      Ember.$(class_to_show).css("visibility", "visible");
      //this.transitionTo('shopping_cart');
    },
    afterSearchProduct(product_name) {
      console.log("El producto es ", product_name);
      this.transitionTo('search', product_name);
    }
  }
});
