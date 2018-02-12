import Ember from 'ember';

export default Ember.Component.extend({

  //Load the app store
  store: Ember.inject.service(),

  actions: {

    confirmReservation() {

      //initialize the client attributes
      var firstname = this.get('first_name');
      var lastname = this.get('last_name');
      var phone = this.get('phone_number');
      var email = this.get('email_address');
      var nit = this.get('nit_number');
      var address = this.get('address');

      //Load the store to a var
      var store = this.get('store');
      //Load all items to a var
      var items = store.findAll('item');

      //Create the record for the client
      var new_client = store.createRecord('client', {
        client_name: firstname,
        client_last_name: lastname,
        client_nit: nit,
        client_address: address,
        client_phone: phone,
        client_email: email
      });

      //Commit the record and save the client
      new_client.save().then(function(record){
        //Create the reservation with the client id
        var reservation = store.createRecord('reservation', {
          reserve_date: new Date(),
          client_id: record.id
        });
        //Commit the reservation and add each item to cart
        reservation.save().then(function(reserve){
          items.forEach(function(item){
            //Create each item for the API
            var cart_item = store.createRecord('cart', {
              product_id: item.get('item_product_id'),
              product_quantity: item.get('item_quantity'),
              reservation_id: reserve.get('id'),
              product_variant_id: item.get('item_variant_id')
            });
            //Save the item in te API
            cart_item.save();
          });

          console.log("El id del cliente es:", reservation.get('client_id'));
          console.log("El id de la reserva es:", reservation.get('id'));

          var cli = reservation.get('client_id');
          var res = reservation.get('id');

          var url = "http://192.241.176.123//confirmation_email/" + cli + "/" + res;

          Ember.$.getJSON(url);
          console.log("La url de envio es:", url);

          items.forEach(function(item){
            item.deleteRecord();
            item.save();
          });
          alert("Su codigo de reserva es: " + reservation.get('reservation_code') + ". Una vez que realice el depósito en el banco, ingrese nuevamente a nuestra página web e ingrese este código en la sección Tienda -> Ingresar Código de Reserva. También enviamos un mensaje a su correo electrónico con los datos necesarios para confirmar la reserva." );
        });
      });
      //Call the router action for redirect
      this.sendAction('afterConf');
      //this.transitionTo('index');
    }
  }

});
