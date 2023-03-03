import checkNumber from "./checkNumber";

const inputs = document.querySelectorAll("[required]");

inputs.forEach((input) => {
  input.addEventListener("blur", () => checkInput(input));
  input.addEventListener("invalid", (e) => e.preventDefault());
});

const errorType = [
  "valueMissing",
  "typeMismatch",
  "patternMismatch",
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
    tooShort: "Your card number has 16 digits",
  },
  date: {
    valueMissing: "Can't be blank",
    typeMismatch: "Wrong format, numbers only",
    patternMismatch: "Wrong format, numbers only",
    tooShort: "Use the two number format",
    tooLong: "Use the two number format",
  },
  cvc: {
    valueMissing: "Can't be blank",
    typeMismatch: "Wrong format, numbers only",
    patternMismatch: "Wrong format, numbers only",
    tooShort: "Your cvc has 3 digits",
    tooLong: "Your cvc has 3 digits",
  },
};

function checkInput(input) {
  let errorMessage = "";
  errorType.forEach((erro) => {
    if (input.validity[erro]) {
      errorMessage = errorMessages[input.name][erro];
    }
  });

  const alertError = input.parentNode.querySelector(".form__alert");
  const inputValidator = input.checkValidity();

  if (!inputValidator) {
    alertError.textContent = errorMessage;
    input.classList.add("--border-error");
  } else {
    alertError.textContent = "";
    input.classList.remove("--border-error");
  }

  checkNumber();
}
