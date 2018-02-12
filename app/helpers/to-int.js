import Ember from 'ember';

export function toInt(params) {
  var text = params[0];
  return parseInt(text);
}

export default Ember.Helper.helper(toInt);
