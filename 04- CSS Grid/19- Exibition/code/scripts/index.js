const $ = document;
const main = $.querySelector("main");
const LIMIT = 8;

const renderToDOM = () => {
  const html = `
    <div class="product-card">
      <img src="/assets/images/perspolis.png" alt="" />
      <button>Buy</button>
    </div>
  `;

  for (let index = 0; index < LIMIT; index++) {
    main.insertAdjacentHTML("beforeend", html);
  }
};

window.addEventListener("load", () => {
  renderToDOM();
});
