import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    searchProduct() {
      var productname = this.get('product_name').toLowerCase();
      productname = productname.replace(/ /g, "%20" );
      console.log("El nombre es:", productname);
      this.sendAction('afterSearch', productname);
    }
  }
});
