import DS from 'ember-data';

export default DS.Model.extend({
  client_name: DS.attr('string'),
  client_last_name: DS.attr('string'),
  client_nit: DS.attr('string'),
  client_address: DS.attr('string'),
  client_phone: DS.attr('string'),
  client_email: DS.attr('string')
});
