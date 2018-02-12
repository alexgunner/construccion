import DS from 'ember-data';

export default DS.Model.extend({
  subcategory_name: DS.attr('string'),
  subcategory_description: DS.attr('string'),
  category: DS.belongsTo('category'),
  products: DS.hasMany('product')
});
