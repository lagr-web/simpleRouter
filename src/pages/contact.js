export const renderContact = async () => {

    const mpage = document.getElementById('mainpage');

    if (!mainpage) {
      console.error("mainpage element not found.");
      return; 
  } 

  if (mpage) {
    while (mpage.firstChild) {
      mpage.removeChild(mpage.firstChild);
  }
}

    const contact = document.createElement("div");
    contact.id = "contact";
    contact.textContent = "contact"
    mainpage.appendChild(contact);


    //return about;

    // Render the About page content
    //const mainpage = document.getElementById('mainpage');
    //mainpage.innerHTML = `<h1>About Us</h1><p>This is the About page.</p>`;

  };