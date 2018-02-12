import Ember from 'ember';

export default Ember.Component.extend({
  isImageShowing: false,
  actions: {
    showImage() {
      this.set('isImageShowing', true);
    },
    hideImage() {
      this.set('isImageShowing', false);
    }
  }
});
