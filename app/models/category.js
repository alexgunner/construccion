import DS from 'ember-data';

export default DS.Model.extend({
  category_name: DS.attr('string'),
  category_description: DS.attr('string'),
  subcategories: DS.hasMany('subcategory'),
  products: DS.hasMany('product'),
  picture: DS.attr('string')
});
