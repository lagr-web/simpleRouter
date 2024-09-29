// src/router.js
import { renderAbout } from './pages/about.js';
import { renderHome } from './pages/index.js';
import { renderContact } from './pages/contact.js';

export const route = (event) => {

  event && event.preventDefault();
  
  const href = event?.target?.href || window.location.pathname;
  window.history.pushState({}, "", href);

  handleLocation(); // Handle the location whenever a link is clicked
};

const routes = {
  "/": renderHome,
  "/about": renderAbout,
  "/contact": renderContact,
  404: () => {
    const mpage = document.querySelector('#mainpage');
    mpage.innerHTML = "<h2>404 - Page Not Found</h2>";
  }
};

export const handleLocation = async () => {
  
  const path = window.location.pathname;
  const route = routes[path] || routes[404];

  if (typeof route === 'function') await route();
  
};

// Handle browser navigation events
window.onpopstate = handleLocation;

// Initial call to handle location when the page loads (right after the DOM is ready)
document.addEventListener("DOMContentLoaded", () => {

 handleLocation(); // Call this after the DOM is ready
 
});

// Expose the route function globally
window.route = route;
