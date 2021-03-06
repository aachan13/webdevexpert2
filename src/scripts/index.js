import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/mobile.css';
import '../styles/animation.css';
import './components/konten';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import App from './views/app';
import swRegister from './utils/sw-register';


const app = new App({
  button: document.querySelector('#mobileMenu'),
  drawer: document.querySelector('#mainNav'),
  content: document.querySelector('#main'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
