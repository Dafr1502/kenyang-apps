Tentu, ini draf **`README.md`** khusus untuk proyek PWA Katalog Restoran (`kenyang-apps`) yang sudah disesuaikan dengan fitur *Testing* (Jest & CodeceptJS), *Optimization* (Sharp, Webpack), serta link *Live Demo*:

```markdown
# 🍽️ Kenyang Apps - Restaurant Catalogue PWA

A Progressive Web Application (PWA) for exploring restaurant catalogues, featuring offline capabilities, automated testing, and performance optimization.

🌐 **Live Demo:** [https://kenyang-apps.vercel.app/](https://kenyang-apps.vercel.app/)

---

## 📌 Features
* **Progressive Web App (PWA):** Service Worker support for offline access, cache management, and installable web application.
* **Restaurant Catalogue:** Interactive list and detailed view of restaurants fetched from REST API.
* **Favorite Restaurants:** Save and manage favorite restaurants using IndexedDB.
* **Automated Testing:** Integrated Unit Testing and End-to-End (E2E) Testing to ensure app reliability.
* **Performance Optimization:** Image optimization, code splitting, and bundle optimization.

---

## 🛠️ Tech Stack & Tools
* **Frontend:** JavaScript (ES6+), HTML5, SCSS / CSS3
* **Bundler:** Webpack (`webpack.common.js`, `webpack.dev.js`, `webpack.prod.js`)
* **PWA & Offline:** Service Worker, Cache API, IndexedDB
* **Testing:**
  * **Unit Testing:** Jest & Babel (`jest.config.js`, `babel.config.json`)
  * **E2E Testing:** CodeceptJS (`codecept.conf.js`, `e2e/`)
* **Optimization:** Sharp (`sharp.js`) for image compression & responsive image generation
* **Linter:** ESLint (`.eslintrc.json`)
* **Deployment:** Vercel

---

## 🚀 Getting Started

### Prerequisites
* **Node.js** (v14 or higher recommended)
* **npm** or **yarn**

### Installation
1. Clone the repository:
   ```bash
   git clone [https://github.com/Dafr1502/kenyang-apps.git](https://github.com/Dafr1502/kenyang-apps.git)

```

2. Navigate to the project directory:
```bash
cd kenyang-apps

```


3. Install dependencies:
```bash
npm install

```



---

## ⚙️ Available Scripts

In the project directory, you can run:

* **`npm run start-dev`** / **`npm run build`**: Runs the app in development mode or builds for production via Webpack.
* **`npm run test`**: Runs unit tests using Jest.
* **`npm run e2e`**: Runs end-to-end testing scenarios using CodeceptJS.
* **`npm run build-image`**: Runs image processing script via Sharp (`sharp.js`).

---

## 📱 Progressive Web App (PWA) Capabilities

* **Offline Access:** Caches app shell, assets, and API requests.
* **Web App Manifest:** Configured for custom icons and standalone display mode.
* **Service Worker:** Registered for caching and offline fallback support.

```

---

### Cara Menambahkan File di GitHub:
1. Di halaman repositori `kenyang-apps`, klik tombol **Add file** $\rightarrow$ **Create new file**.
2. Beri nama file: **`README.md`**.
3. *Copy-paste* teks Markdown di atas ke dalam editor.
4. Klik tombol hijau **Commit changes...** di pojok kanan atas.

```
