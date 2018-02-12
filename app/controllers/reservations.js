import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    showDepositForm() {
      Ember.$(".deposit-form").show("fast");
    },
    showMobileForm() {
      Ember.$(".mobile-form").show("fast");
    },
    mobileConfirmation() {
      var mobile = this.get("mobile");
      console.log("El telefono es: ", mobile);
      var url = "http://192.241.176.123//mobileConfirmation/" + mobile;
      Ember.$.getJSON(url);
      Ember.$(".mobile-form").hide("fast");
      Ember.$(".code-form").show("fast");
    },
    codeConfirmation() {
      var code = this.get('mobile_code');
      var url = "http://192.241.176.123//confirmMobileCode/" + code;
      Ember.$.getJSON(url, function(response){
        if (response.reservation.confirmed) {
          alert("Su pedido ha sido confirmado, nosotros nos contactaremos con usted");
        } else {
          alert("El codigo ingresado no es correcto");
        }
      });
    }
  }
});
