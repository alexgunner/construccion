import DS from 'ember-data';

export default DS.Model.extend({
  manufacturer_name: DS.attr('string'),
  manufacturer_description: DS.attr('string'),
  manufacturer_country: DS.attr('string'),
  manu_url: DS.attr('string'),
  manufacturer_logo: DS.attr('string')
});
