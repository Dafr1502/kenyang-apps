/* eslint-disable linebreak-style */
/* eslint-disable no-console */
/* eslint-disable linebreak-style */
import UrlParser from '../../routes/url-parser';
import RestaurantDbSource from '../../data/restaurantdb-source';
import {
  createDetailRestaurantTemplate,
  createAddReviewRestaurantTemplate,
  createReviewRestaurantTemplate,
  createLoadingTemplate,
} from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import CONFIG from '../../globals/config';

const Detail = {
  async render() {
    const showLoading = createLoadingTemplate.show();

    return `
    <div class="detail-content__wrapper"></div>
    ${showLoading}
    <div class="likeButtonContainer"></div>
    
  </section>
  <section class="add-review"></section>
  <section class="review"></section>
        `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantDbSource.restaurantDetail(url.id);
    const detailRestaurantContainer = document.querySelector('.detail-content__wrapper');
    const addReviewRestaurantContainer = document.querySelector('.add-review');
    const reviewRestaurantContainer = document.querySelector('.review');
    const boardingElement = document.querySelector('.boarding');
    if (boardingElement) {
      boardingElement.style.display = 'none';
    }

    detailRestaurantContainer.innerHTML = createDetailRestaurantTemplate(restaurant);
    addReviewRestaurantContainer.innerHTML = createAddReviewRestaurantTemplate;
    reviewRestaurantContainer.innerHTML = createReviewRestaurantTemplate(restaurant);
    createLoadingTemplate.remove();

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('.likeButtonContainer'),
      restaurant: {
        id: restaurant.id,
        pictureId: restaurant.pictureId,
        name: restaurant.name,
        city: restaurant.city,
        rating: restaurant.rating,
        address: restaurant.address,
        menu: restaurant.menu,
        description: restaurant.description,
        review: restaurant.review,
      },
    });

    const submitReview = document.querySelector('#submitButton');

    submitReview.addEventListener('click', (event) => {
      event.preventDefault();

      const customerName = document.querySelector('#inputName').value;
      const customerReview = document.querySelector('#inputReview').value;

      fetch(CONFIG.BASE_REVIEW_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: restaurant.id,
          name: customerName,
          review: customerReview,
        }),
      })
        .then((response) => response.json())
        .then((responseJson) => {
          console.log(responseJson);
        })
        .catch((error) => {
          console.log(error);
        });
    });
  },
};

export default Detail;
