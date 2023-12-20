const form = document.querySelector(".form");
const inputs = document.querySelectorAll(".input");
const textInput = document.querySelector(".text");
const errorText = document.querySelector(".text_error");
const telInput = document.querySelector(".tel");
const errorTel = document.querySelector(".tel_error");
const emailInput = document.querySelector(".email");
const errorEmail = document.querySelector(".email_error");
const passwordInput = document.querySelector(".password");
const errorPassword = document.querySelector(".password_error");

form.addEventListener("submit", (ev) => {
  ev.preventDefault();

  if (!validation()) {
    console.log("error");
  } else {
    console.log("submit");
  }
});

inputValidation(textInput, errorText);
telValidation(telInput, errorTel);

let textInputValidation = false;

function inputValidation(inputElem, errorElem) {
  inputElem.addEventListener("input", (ev) => {
    errorText.textContent = "";
    if (ev.target.value.length < ev.target.dataset.minLength) {
      textInputValidation = false;
      errorElem.textContent = `имя должно быть более ${ev.target.dataset.minLength} символов `;
    } else if (ev.target.value.length > ev.target.dataset.maxLength) {
      textInputValidation = false;
      errorElem.textContent = `имя должно быть меньше ${ev.target.dataset.maxLength} символов`;
    } else {
      textInputValidation = true;
    }
  });
}

function telValidation(elem, errorElem) {
  elem.addEventListener("input", (ev) => {
    errorElem.textContent = "";
    let content = ev.target.value;
    let phoneNumbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "+"];

    const splittedContent = content.split("");

    const filteredContent = splittedContent.filter((num) =>
      phoneNumbers.some((el) => el === num)
    );
    console.log(splittedContent);
    console.log(filteredContent);
    console.log(content);
    ev.target.value = filteredContent.join("");

    if (ev.target.value.length < ev.target.dataset.minLength) {
      textInputValidation = false;
      errorElem.textContent = `номер телефона должен быть более ${ev.target.dataset.minLength} символов `;
    } else if (ev.target.value.length > ev.target.dataset.maxLength) {
      textInputValidation = false;
      errorElem.textContent = `номер телефона должен быть меньше ${ev.target.dataset.maxLength} символов`;
    } else {
      textInputValidation = true;
    }
  });
}

function validation() {
  return textInputValidation;
}
