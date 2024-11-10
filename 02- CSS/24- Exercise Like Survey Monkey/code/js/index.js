const $ = document;
const radioButtons = $.querySelector("#radio-buttons");
const jobTypes = [
  "Full-time",
  "Part-time",
  "Contract",
  "Temporary",
  "Intership",
];

let content = "";
const populateContent = () => {
  jobTypes.forEach((jobType, index) => {
    const lowercase = jobType.toLowerCase();
    const html = `
        <input type="radio" id=${lowercase} name="Job-Type" value=${jobType} />
        <label for=${lowercase}>
          <span class="index">${index + 1}</span>
          <span>${jobType}</span> 
        </label>
        `;
    content += html;
  });
};

window.onload = () => {
  populateContent();
  radioButtons.insertAdjacentHTML("beforeend", content);
};
