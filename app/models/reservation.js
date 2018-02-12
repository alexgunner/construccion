import DS from 'ember-data';

export default DS.Model.extend({
  reserve_date: DS.attr('string'),
  reservation_code: DS.attr('string'),
  client_id: DS.attr('string')
});
