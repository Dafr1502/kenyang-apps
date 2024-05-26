/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
/* eslint-disable no-underscore-dangle */

import RestaurantSource from '../data/restaurantdb-source';

const ButtonAddReview = {
  async init({ id }) {
    this._id = id;

    await this._addReview(this._id);
  },

  async _addReview(restaurantId) {
    const customerName = document.querySelector('#name');
    const customerReview = document.querySelector('#review');
    const data = {
      id: restaurantId,
      name: customerName.value,
      review: customerReview.value,
    };
    await RestaurantSource.reviewRestaurant(data);
    customerName.value = '';
    customerReview.value = '';
  },
};

export default ButtonAddReview;