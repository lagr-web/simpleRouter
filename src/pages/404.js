export const render404 = async () => {
  
    // Render the 404 page content
    const mainpage = document.getElementById('mainpage');
    mainpage.innerHTML = `<h1>404 Not Found</h1><p>The page you are looking for does not exist.</p>`;
  };