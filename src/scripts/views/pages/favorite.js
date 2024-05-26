/* eslint-disable linebreak-style */
/* eslint-disable no-console */

import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantListTemplate, createLoadingTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    const showLoading = createLoadingTemplate.show();

    return `
    ${showLoading}
      <section id="explore">
        <div class="explore-text">
          <h1 class="explore-text__title">
            Your Favorites<br/>Restaurant 
          </h1>
        </div>
        <div class="restaurant"></div>
      </section>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurant();
    console.log(restaurants);
    const restaurantContainer = document.querySelector('.restaurant');
    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantListTemplate(restaurant);
    });
    createLoadingTemplate.remove();
    const boardingElement = document.querySelector('.boarding');
    if (boardingElement) {
      boardingElement.style.display = 'none';
    }
  },
};

export default Favorite;
