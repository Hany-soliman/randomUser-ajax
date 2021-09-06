import getElement from "./getElement.js";
import checkActive from "./checkActive.js";

const img = getElement(".user-img");
const title = getElement(".user-title");
const value = getElement(".user-value");
const btns = [...document.querySelectorAll(".icon")];

const displayUser = (person) => {
    img.src = person.image;
    value.textContent = person.name;
    title.textContent = "My name is";
    checkActive(btns);
    btns[0].classList.add("active");
    btns.forEach((btn) => {
      const label = btn.dataset.label;
      const target = getElement(`[data-label=${label}]`);
      btn.addEventListener("click", () => {
        value.textContent = person[label];
        title.textContent = `My ${label} is`;
        checkActive(btns);
        target.classList.add("active");
      });
    });
  };

  export default displayUser