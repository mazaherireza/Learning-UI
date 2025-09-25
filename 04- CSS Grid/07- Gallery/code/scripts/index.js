const $ = document;
const main = $.querySelector("main");

const PATH = "/assets/images/portraits/";
const imgs = [];
const MAX = 6;
const EXTENSION = "jpg";

const populateImgs = () => {
  for (let index = 1; index <= MAX; index++) {
    imgs.push(`${index}.${EXTENSION}`);
  }
};

const populateMain = () => {
  imgs.forEach((img) => {
    const html = `
        <div class="frame">
          <img src=${PATH}${img} alt="" />
          <span class="title">HOSCOS</span>
        </div>
    `;
    main.insertAdjacentHTML("beforeend", html);
  });
};

window.onload = () => {
  populateImgs();
  populateMain();
};
