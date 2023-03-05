const inputs = document.querySelectorAll("[required]");
const cardName = document.getElementById("name-card");
const cardNumber = document.getElementById("number-card");
const cardDate = document.getElementById("date-card");
const cardCvc = document.getElementById("cvc-card");

inputs.forEach((input) => {
  if (input.name === "name") {
    input.addEventListener("keyup", () => {
      cardName.textContent = input.value;
    });
  } else if (input.name === "number") {
    input.addEventListener("keyup", () => {
      cardNumber.textContent = input.value;
    });
  } else if (input.name === "date") {
    input.addEventListener("keyup", () => {
      const monthInput = document.getElementById("month");
      const yearInput = document.getElementById("year");

      let month = monthInput.value.padStart(2, "0");
      let year = yearInput.value.padStart(2, "0");

      cardDate.textContent = `${month}/${year}`;
    });
  } else {
    input.addEventListener("keyup", () => {
      cardCvc.textContent = input.value;
    });
  }
});
