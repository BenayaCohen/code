const inputEl = document.querySelector(".submit");
const nameEl = document.querySelector(".name");
const numberEl = document.querySelector(".number");
const emailEl = document.querySelector(".email");
const commentEl = document.querySelector(".comment");
const hourEl = document.querySelector(".hour");

inputsArray = [nameEl, numberEl, emailEl, commentEl, hourEl];
inputEl.addEventListener("click", () => {
  for (let i = 0; i < inputsArray.length; i++) {
    console.log(inputsArray[i].value); 
  }
});

inputsArray.forEach((input) => {
  input.addEventListener("change", () => {
    inputEl.disabled = false;
    for (let i = 0; i < inputsArray.length; i++) {
      if (!inputsArray[i].value) {
        inputEl.disabled = true;
      }
    }
  });
});

const codingLanguages = ["HTML", "CSS", "JavaScript", "payton", "c++"];
let web = document.getElementById("website");
for (let i = 0; i < codingLanguages.length; i++) {
  web.textContent += codingLanguages.slice(0, -1).join(', ') + ' and ' + codingLanguages.slice(-1)
  break

}