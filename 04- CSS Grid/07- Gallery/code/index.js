const $ = document;
const wrapper = $.querySelector(".wrapper");

const PATH = "./assets/images/Portraits/";
const imgs = [];
const MAX = 6;
const EXTENSION = "jpg";

const populateImgs = () => {
  for (let index = 1; index <= MAX; index++) {
    imgs.push(`${index}.${EXTENSION}`);
  }
};

const populateWrapper = () => {
  imgs.forEach((img) => {
    const html = `
        <div>
          <img src=${PATH}${img} alt="Portrait" />
          <span class="title">HOSCOS</span>
        </div>
    `;
    wrapper.insertAdjacentHTML("beforeend", html);
  });
};

window.onload = () => {
  populateImgs();
  populateWrapper();
};
