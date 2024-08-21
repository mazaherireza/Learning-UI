const $ = document;
const icon = $.querySelector(".hamburger-icon");
const menu = $.querySelector(".menu");
const PATH = "./assets/images/";

icon.onclick = (event) => {
  if (event.target.src.includes("Burger.svg")) {
    icon.setAttribute("src", `${PATH}Close.svg`);
    menu.style.left = "0";
  } else {
    icon.setAttribute("src", `${PATH}Burger.svg`);
    menu.style.left = "-10rem";
  }
};
