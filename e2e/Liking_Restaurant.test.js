/* eslint-disable no-console */
/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Restaurant');

Scenario('Liking and unLiking one Restaurant', async ({ I }) => {
  I.amOnPage('/');

  I.seeElement('.restaurant-card a');
  const firstRestaurant = locate('.restaurant-card a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  console.log(firstRestaurantTitle);

  I.click(firstRestaurant);

  I.seeElement('.likeButtonContainer button');
  I.click('.likeButtonContainer button');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant-card a');
  const likedRestaurantTitle = await I.grabTextFrom('.restaurant-card a');
  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);

  I.click('.restaurant-card a');

  I.seeElement('.likeButtonContainer button');
  I.click('.likeButtonContainer button');

  I.amOnPage('/#/favorite');
  I.dontSee(likedRestaurantTitle);
});
