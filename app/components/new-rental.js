import Ember from 'ember';

export default Ember.Component.extend({
  addNewRental: false,
  actions: {
    rentalFormShow() {
      this.set('addNewRental', true);
    },

    save1() {
      var params = {
        owner: this.get('owner'),
        city: this.get('city'),
        type: this.get('type'),
        image: this.get('image'),
        bedrooms: this.get('bedrooms'),
        date_added: Date.now()
      };
      this.set('addNewRental', false),
      this.sendAction('save2', params); //Expected an assignment or function call and instead saw an expression.

    }
  }
});
