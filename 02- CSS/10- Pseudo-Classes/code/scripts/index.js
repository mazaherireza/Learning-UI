const $ = document;
const form = $.querySelector("form");
const programmingLanguages = ["C", "C++", "PHP", "Python", "Golang"];

let content = "";
const populateContent = () => {
  programmingLanguages.forEach((programmingLanguage) => {
    const lowercase = programmingLanguage.toLowerCase();
    const html = `
        <input type="checkbox" id=${lowercase} name=${programmingLanguage} value=${programmingLanguage} />
        <label for=${lowercase}>
          <span>${programmingLanguage}</span> 
          <span><i class="fa fa-heart"></i></span>
        </label>
        `;
    content += html;
  });
};

window.onload = () => {
  populateContent();
  form.insertAdjacentHTML("beforeend", content);
};
