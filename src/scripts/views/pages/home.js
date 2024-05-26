/* eslint-disable linebreak-style */
/* eslint-disable no-console */

import RestaurantDbSource from '../../data/restaurantdb-source';
import { createRestaurantListTemplate, createLoadingTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    const showLoading = createLoadingTemplate.show();

    return `

      <section id="explore">
        <div class="explore-text">
          <h1 class="explore-text__title">
            Explore Restaurants <br />
          </h1>
        </div>
        ${showLoading}
        <div class="restaurant"></div>
      </section>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantDbSource.restaurantList();
    console.log(restaurants);
    const restaurantContainer = document.querySelector('.restaurant');
    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantListTemplate(restaurant);
    });
    createLoadingTemplate.remove();
  },
};

export default Home;
