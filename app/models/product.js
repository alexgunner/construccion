import DS from 'ember-data';

export default DS.Model.extend({
  product_name: DS.attr('string'),
  product_description: DS.attr('string'),
  product_sell_price: DS.attr('number'),
  picture: DS.attr('string'),
  product_short_description: DS.attr('string'),
  product_industry: DS.attr('string'),
  product_pdf: DS.attr('string'),
  product_manufacturer: DS.attr('string'),
  category: DS.belongsTo('category'),
  subcategory: DS.belongsTo('subcategory'),
  product_variants: DS.hasMany('product_variant')
});
