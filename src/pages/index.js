// src/pages/index.js
export const renderHome = async () => {

  const mpage = document.querySelector("#mainpage");

  if (!mpage) {
    console.error("mainpage element not found.");
    return;
  }

  if (mpage) {
    while (mpage.firstChild) {
      mpage.removeChild(mpage.firstChild);
    }
  }

  const index = document.createElement("div");
  index.id = "index";
  index.textContent = "index";
  mpage.appendChild(index);
  

  return index;
};
