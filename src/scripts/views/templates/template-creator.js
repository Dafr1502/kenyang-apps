/* eslint-disable linebreak-style */
import CONFIG from '../../globals/config';

const createRestaurantListTemplate = (restaurant) => `
<article class="restaurant-card">
    <div id="explore" class="restaurant-card__image">
      <img class="lazyload" data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="foto restoran" crossorigin="anonymous"/>
      <div class="restaurant-card__city">
        <p>${restaurant.city}</p>
      </div>
      <div class="restaurant-card__rating">
        <i class="fa fa-star"></i>
        <p>${restaurant.rating}</p>
      </div>
    </div>
    <div class="restaurant-card__content">
      <div class="restaurant-card__name">
        <h2>${restaurant.name}</h2>
      </div>
      <div class="restaurant-card__description">
        <p>
        ${restaurant.description}
        </p>
      </div>
      <div class="restaurant-card__detail-button-wrapper">
                <a href="/#/detail/${restaurant.id}" class="detail-button">Detail</a>
              </div>
    </div>
  </article>
`;

const createDetailRestaurantTemplate = (restaurant) => `
  <section id="detail" class="detail">
    <div class="detail-text">
            <h1 class="detail-text__title">
            Detail Page Of <br />${restaurant.name} Restaurant
            </h1>
        </div>
<article class="detail-content__card">
    <div class="detail-content__card-image">
      <img src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="Restaurant" crossorigin="anonymous"/>
      <div class="detail-content__card-city">
        <p>${restaurant.city}</p>
      </div>
      <div class="detail-content__card-rating">
        <i class="fa fa-star"></i>
        <p>${restaurant.rating}</p>
      </div>
   
    </div>


    <div class="detail-content__card-information">
      <div class="detail-content__card-information-address">
        <p>Address : ${restaurant.address}</p>
      </div>
      <div class="detail-content__card-information-categories">
        <p>Categories : ${restaurant.categories.map((categories) => categories.name)}</p><br />
      </div>
      <div class="detail-content__card-information-food">
       <p>Makanan : ${restaurant.menus.foods.map((food) => food.name)}</p>
      </div>
      <div class="detail-content__card-information-drink">
        <p>Minuman : ${restaurant.menus.drinks.map((food) => food.name)}</p><br />
      </div>
      <div class="detail-content__card-information-description">
        <p>
          ${restaurant.description}
        </p>
      </div>
    </div>
  </article>
`;

const createReviewRestaurantTemplate = (restaurant) => `
${restaurant.customerReviews.map((review) => `
  <div class="review__card">
    <div class="review__card-user-icon">
      <img src="./images/profile-user.png" alt="">
    </div>
    <div class="review__card-user-data">
      <div class="review__card-user-data-name">
          <p>${review.name}</p>
      </div>
      <div class="review__card-user-data-date">
          <p>${review.date}</p>
      </div>
      <div class="review__card-user-data-review">
          <p>${review.review}</p>
      </div>
    </div>
  </div>
`).join('')}
`;

const createAddReviewRestaurantTemplate = `
  <div class="add-review__card">
    <form action="">
      <h3>Add Your Review</h3>
      <div class="form-group">
        <input type="text" name="input-name" id="inputName" placeholder="Insert Your Name" size="63" required>
       </div>
      <div class="form-group">
        <textarea name="input-review" id="inputReview" size="63" cols="59"
            rows="10" required placeholder="Insert Your Review"></textarea>
      </div>
      <div class="form-button">
        <button id="submitButton">Submit</button>
      </div>
    </form>
  </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

const createLoadingTemplate = {
  show() {
    return `
    <div class="lds-default"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    `;
  },
  remove() {
    document.querySelector('.lds-default').remove();
  },
};

export {
  createLoadingTemplate,
  createAddReviewRestaurantTemplate,
  createRestaurantListTemplate,
  createDetailRestaurantTemplate,
  createReviewRestaurantTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
