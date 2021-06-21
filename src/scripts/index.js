import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/mobile.css';
import App from './views/app';
import main from './food';

main();
const app = new App({
  button: document.querySelector('#mobileMenu'),
  drawer: document.querySelector('#mainNav'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});
