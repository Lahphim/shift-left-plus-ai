import Home from './components/Home.js';
import About from './components/About.js';
import Contact from './components/Contact.js';

const routes = {
  home: Home,
  about: About,
  contact: Contact
};

export function navigate(pageId) {
  const contentDiv = document.getElementById('content');
  if (routes[pageId]) {
    contentDiv.innerHTML = routes[pageId]();
    bindLinks(contentDiv);
  }
}

export function bindLinks(container) {
  container.querySelectorAll('a[data-link]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const page = e.target.getAttribute('data-link');
      navigate(page);
    });
  });
}
