import DS from 'ember-data';

export default DS.Model.extend({
  item_product_id: DS.attr('string'),
  item_sell_price: DS.attr('number'),
  item_quantity: DS.attr('number'),
  item_name: DS.attr('string'),
  item_description: DS.attr('string'),
  item_variant_id: DS.attr('string')
});
