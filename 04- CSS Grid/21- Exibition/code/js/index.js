const $ = document;

const wrapper = $.querySelector(".wrapper");

const LIMIT = 8;

const renderToDOM = () => {
  const html = `
    <div class="product-card">
      <div class="img-wrapper">
        <img src="./assets/images/Perspolis.png" alt="Perspolis" />
      </div>
      <button>Buy</button>
    </div>
  `;

  for (let index = 0; index < LIMIT; index++) {
    wrapper.insertAdjacentHTML("beforeend", html);
  }
};

window.addEventListener("load", () => {
  renderToDOM();
});
