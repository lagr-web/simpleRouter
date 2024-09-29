// src/pages/about.js

export const renderAbout = async () => {
  
  const mpage = document.getElementById("mainpage");

  if (!mpage) {
    console.error("mainpage element not found.");
    return; // Exit the function if mainpage is not found
  }

  if (mpage) {
    while (mpage.firstChild) {
      mpage.removeChild(mpage.firstChild);
    }
  }

  const about = document.createElement("div");
  about.id = "about";
  about.textContent = "about";
  mpage.appendChild(about);

  //return about;

  // Render the About page content
  //const mainpage = document.getElementById('mainpage');
  //mainpage.innerHTML = `<h1>About Us</h1><p>This is the About page.</p>`;
};

/* export const renderAbout = () => {

    const aboutDiv = document.createElement('div');
    const heading = document.createElement('h1');
    heading.textContent = 'About Page';
    const paragraph = document.createElement('p');
    paragraph.textContent = 'Learn more about us!';

    aboutDiv.appendChild(heading);
    aboutDiv.appendChild(paragraph);
    
    return aboutDiv; // Return the complete DOM structure
}; */
