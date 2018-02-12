import DS from 'ember-data';

export default DS.RESTAdapter.extend({

  host: 'http://192.241.176.123',

  pathForType: function(type) {
    return Ember.String.pluralize(Ember.String.underscore(type));
  }
});

/*DS.RESTAdapter.reopen({
    buildURL: function(record, suffix) {
      return this._super(record,suffix).toLowerCase();
    }
});
*/
