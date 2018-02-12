import DS from 'ember-data';

export default DS.Model.extend({
  variant_code: DS.attr('string'),
  variant_cost: DS.attr('string'),
  variant_sell_price: DS.attr('string'),
  variant_color: DS.attr('string'),
  promotion_price: DS.attr('string'),
  product: DS.belongsTo('product'),
  available: DS.attr('string')
});
