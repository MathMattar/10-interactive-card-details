import {
  numberValidation,
  dateValidation,
  monthValidation,
} from "./inputRules.js";

const inputs = document.querySelectorAll("[required]");
const form = document.getElementById("form");
const completeState = document.getElementById("complete-state");
const redirect = document.getElementById("continue");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  form.classList.add("--hidden");
  completeState.classList.remove("--hidden");
});

redirect.addEventListener("click", (e) => {
  e.preventDefault();

  location.reload();
});

inputs.forEach((input) => {
  input.addEventListener("blur", () => checkInput(input));
  input.addEventListener("invalid", (e) => e.preventDefault());

  if (input.name === "number") {
    numberValidation(input);
  }

  if (input.name === "date") {
    dateValidation(input);
  }
});

const errorType = [
  "valueMissing",
  "typeMismatch",
  "patternMismatch",
  "customError",
  "tooShort",
];

const errorMessages = {
  name: {
    valueMissing: "Can't be blank",
    typeMismatch: "Wrong format, letters only",
    patternMismatch: "Wrong format, letters only",
    tooShort: "Wrong name, minimum 3 letters",
  },
  number: {
    valueMissing: "Can't be blank",
    typeMismatch: "Wrong format, numbers only",
    patternMismatch: "Wrong format, numbers only",
    customError: "Your card number has 16 digits",
  },
  date: {
    valueMissing: "Can't be blank",
    customError: "Enter a valid value",
    tooShort: "Use 2 characters",
  },
  cvc: {
    valueMissing: "Can't be blank",
    typeMismatch: "Wrong format, numbers only",
    patternMismatch: "Wrong format, numbers only",
    tooShort: "Your cvc has 3 digits",
  },
};

function checkInput(input) {
  let errorMessage = "";

  if (input.name === "date" && input.id === "month") {
    monthValidation(input);
  }

  if (input.validity.valueMissing) {
    errorMessage = errorMessages[input.name].valueMissing;
  } else {
    errorType.forEach((erro) => {
      if (input.validity[erro]) {
        errorMessage = errorMessages[input.name][erro];
      }
    });
  }

  const alertError = input.parentNode.querySelector(".form__alert");
  const inputValidator = input.checkValidity();

  if (!inputValidator) {
    alertError.textContent = errorMessage;
    input.classList.add("--border-error");
  } else {
    alertError.textContent = "";
    input.classList.remove("--border-error");
  }
}
