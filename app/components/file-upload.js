import Ember from 'ember';
import EmberUploader from 'ember-uploader';

export default EmberUploader.FileField.extend({
  filesDidChange: function(files) {
    const uploader = EmberUploader.Uploader.create({
      url: 'http://192.241.176.123/upload'
    });

    var reserve_id = this.get('reserve');

    if (!Ember.isEmpty(files)) {
      uploader.upload(files[0], { reserve_id });
    }
  }
});
