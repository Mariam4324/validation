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
});

textValidation(textInput, errorText);
telValidation(telInput, errorTel);
passwordValidation(passwordInput, errorPassword);
emailValidation(emailInput, errorEmail);

let InputValidation = false;

function textValidation(elem, errorElem) {
  elem.addEventListener("input", (ev) => {
    errorText.textContent = "";
    if (ev.target.value.length === 0) {
      elem.classList.add("unsubmit");
      errorElem.textContent = "обязательно";
    } else if (ev.target.value.length < ev.target.dataset.minLength) {
      InputValidation = false;
      errorElem.textContent = `имя должно быть более ${ev.target.dataset.minLength} символов `;
      elem.classList.add("unsubmit");
    } else if (ev.target.value.length > ev.target.dataset.maxLength) {
      InputValidation = false;
      errorElem.textContent = `имя должно быть меньше ${ev.target.dataset.maxLength} символов`;
      elem.classList.add("unsubmit");
    } else {
      elem.classList.remove("unsubmit");
      elem.classList.add("submit");
      InputValidation = true;
    }
  });
}

function telValidation(elem, errorElem) {
  elem.addEventListener("input", (ev) => {
    errorElem.textContent = "";
    let content = ev.target.value;
    let phoneNumbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

    const splittedContent = content.split("");

    const filteredContent = splittedContent.filter((num) =>
      phoneNumbers.some((el) => el === num)
    );

    ev.target.value = filteredContent.join("");
    if (ev.target.value.length === 0) {
      elem.classList.add("unsubmit");
      errorElem.textContent = "обязательно";
    } else if (ev.target.value.length < ev.target.dataset.minLength) {
      InputValidation = false;
      errorElem.textContent = `номер телефона должен быть не менее ${ev.target.dataset.minLength} символов`;
      elem.classList.add("unsubmit");
    } else if (ev.target.value.length > ev.target.dataset.maxLength) {
      InputValidation = false;
      errorElem.textContent = `номер телефона должен быть менее ${ev.target.dataset.maxLength} символов`;
      elem.classList.add("unsubmit");
    } else {
      elem.classList.remove("unsubmit");
      elem.classList.add("submit");
      InputValidation = true;
    }
  });
}

function passwordValidation(elem, errorElem) {
  elem.addEventListener("input", (ev) => {
    errorElem.textContent = "";
    if (ev.target.value.length === 0) {
      elem.classList.add("unsubmit");
      errorElem.textContent = "обязательно";
    } else if (ev.target.value.length < ev.target.dataset.minLength) {
      elem.classList.add("unsubmit");
      errorElem.textContent = `пароль должен быть более ${ev.target.dataset.minLength} символов`;
    } else if (ev.target.value.length > ev.target.dataset.maxLength) {
      elem.classList.add("unsubmit");
      errorElem.textContent = `пароль должен быть меньше ${ev.target.dataset.maxLength} символов`;
    } else {
      InputValidation = true;
      elem.classList.remove("unsubmit");
      elem.classList.add("submit");
    }
  });
}

function emailValidation(elem, errorElem) {
  errorElem.textContent = "";

  elem.addEventListener("input", (ev) => {
    errorElem.textContent = "";
    if (ev.target.value.length === 0) {
      elem.classList.add("unsubmit");
      errorElem.textContent = "обязательно";
    } else if (ev.target.value.length < ev.target.dataset.minLength) {
      elem.classList.add("unsubmit");
      errorElem.textContent = `почта должна быть более ${ev.target.dataset.minLength} символов`;
    } else if (ev.target.value.length > ev.target.dataset.maxLength) {
      elem.classList.add("unsubmit");
      errorElem.textContent = `пароль должен быть меньше ${ev.target.dataset.maxLength} символов`;
    } else {
      elem.classList.remove("unsubmit");
      elem.classList.add("submit");
      InputValidation = true;
    }
  });
}

function validation() {
  return InputValidation;
}
