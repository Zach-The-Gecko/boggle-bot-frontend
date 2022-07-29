const length = document.querySelector("#length");
const letters = document.querySelector("#letters");
const button = document.querySelector("#button");
const display = document.querySelector("#display");

const submitHandler = () => {
  fetch(
    `https://boggle-breaker-backend.herokuapp.com/get-answers?length=${length.value}&letters=${letters.value}`
  )
    .then((json) => json.json())
    .then((res) => {
      display.innerHTML = res.answers;
    });
};

button.addEventListener("click", submitHandler);
[length, letters].map((inputField) =>
  inputField.addEventListener("keydown", (e) => {
    e.keyCode == 13 && submitHandler();
  })
);
