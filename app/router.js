import Ember from 'ember';
import config from './config/environment';
import googlePageview from './mixins/google-pageview';

const Router = Ember.Router.extend(googlePageview, {
  location: config.locationType
});

Router.map(function() {
  this.route('products');
  this.route('items');
  this.route('shopping_cart');
  this.route('reservations');
  this.route('reserve-confirmation');
  this.route('clients');
  this.route('contact');
  this.route('quienes');
  this.route('store');
  this.route('category', { path: '/category/:category_id' });
  this.route('my_reservations');
  this.route('sales');
  this.route('certifications');
  this.route('capacitations');
  this.route('subcategory', { path: '/subcategory/:subcategory_id' });
  this.route('search', { path: '/search/:product_name' });
  this.route('find_reserve', { path: '/find_reserve/:reserve_code' });
});

export default Router;
