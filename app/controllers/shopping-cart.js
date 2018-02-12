import Ember from 'ember';

export default Ember.Controller.extend({
  suma: Ember.computed(function(){
    var total = 0;
    this.get('model.items').forEach(function(item){
      total += (item.get('item_sell_price')*(item).get('item_quantity'));
    });
    return total.toFixed(2);
  }),
  actions: {
    addQuantity(item) {
      //updating the quantity
      if (item.incrementProperty('item_quantity') >= 0){
        item.save();

        //updating the total
        var total = this.get('suma');
        total = parseFloat(total);
        this.set('suma', (total + item.get('item_sell_price')).toFixed(2));
      }
    },
    resQuantity(item) {
      //updating the quantity
      if (item.decrementProperty('item_quantity') >= 0) {
        item.save();

        //updating the total
        var total = this.get('suma');
        total = parseFloat(total);
        this.set('suma', (total - item.get('item_sell_price')).toFixed(2));
      }
    },
    deleteFromCart(item) {
      item.deleteRecord();
      if (item.get('isDeleted')) {
        //updating the total
        var total = this.get('suma');
        this.set('suma', (total - (item.get('item_sell_price')) * item.get('item_quantity')).toFixed(2));

        //deleting the item
        item.save();
      }
    },
    showUserForm() {
      Ember.$(".user-info").css({visibility:"visible", opacity: 0.0}).animate({opacity: 1.0},300);
      Ember.$(".confirm-button").hide();
    }
  }
});
