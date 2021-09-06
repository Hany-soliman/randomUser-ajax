import getElement from "./utils/getElement.js";
import getUser from "./utils/getUser.js";
import displayUser from "./utils/displayUser.js";

const randomBtn = getElement(".btn");


const showUser = async () => {
  const person = await getUser();
  displayUser(person);
};

window.addEventListener("DOMContentLoaded", showUser);
randomBtn.addEventListener("click", showUser);



