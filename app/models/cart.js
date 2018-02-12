import DS from 'ember-data';

export default DS.Model.extend({
  product_id: DS.attr('string'),
  product_quantity: DS.attr('number'),
  reservation_id: DS.attr('string'),
  product_variant_id: DS.attr('string')
});
