import Navigation from './components/Navigation.js';
import { navigate, bindLinks } from './router.js';

function renderApp() {
  const app = document.querySelector('#app');
  app.innerHTML = Navigation() + '<main id="content"></main>';

  // Bind links in the navigation bar
  bindLinks(app);

  // Load initial page
  navigate('home');
}

renderApp();
