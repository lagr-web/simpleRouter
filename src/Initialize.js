//src/initialize.js

import { route } from "./router"; // creating the 

export default class Initialize {
  constructor() {

    const app = document.createElement("div");
    app.id = "app";
    document.body.appendChild(app);

    const nav = document.createElement("nav");
    nav.id = "main-nav";
    app.appendChild(nav);

    const mainpage = document.createElement("section");
    mainpage.id = "mainpage";
    app.appendChild(mainpage);

    const links = [
      { text: "Home", href: "/" },
      { text: "About", href: "/about" },
      { text: "Contact", href: "/contact" },
    ];

    links.forEach((link) => {

      const a = document.createElement("a"); // Create the anchor element
      a.textContent = link.text; // Set the text content
      a.href = link.href; // Set the href attribute
      a.addEventListener("click", route); // Attach the route function to handle clicks
      nav.appendChild(a); // Append the link to the nav
     
    });

   

  } // END constructor
} // END class
