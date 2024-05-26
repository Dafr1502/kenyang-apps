/* eslint-disable linebreak-style */
/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */

import DrawerInitiator from '../utils/drawer-initiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

class App {
  constructor({
    button, drawer, header, content,
  }) {
    this._button = button;
    this._drawer = drawer;
    this._header = header;
    this._content = content;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      header: this._header,
      content: this._content,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();

    const skipElement = document.querySelector('.skip-to-content');
    const mainElement = document.querySelector('#main');
    skipElement.addEventListener('click', (event) => {
      event.preventDefault();
      console.log('Skip to Content clicked');
      mainElement.focus();
    });
  }
}

export default App;
