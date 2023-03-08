export function numberValidation(input) {
  const regex = /[^0-9]/g;

  input.addEventListener("input", () => {
    let number = input.value.replace(regex, "");

    if (number.length > 4) {
      number = number.match(/.{1,4}/g).join(" ");
    }

    input.value = number;

    if (input.value.length < input.minLength) {
      input.setCustomValidity("Your card number has 16 digits");
    } else {
      input.setCustomValidity("");
    }
  });
}

export function dateValidation(input) {
  if (input.name === "date") {
    input.addEventListener("input", (e) => {
      const value = e.target.value;

      // Expressão regular para verificar se o valor é um número de 0 a 9
      const regex = /^[0-9]*$/;

      if (!regex.test(value)) {
        // Remove todos os caracteres não numéricos do valor de entrada
        e.target.value = value.replace(/[^0-9]/g, "");
      }
    });
  }
}

export function monthValidation(input) {
  if (input.name === "date" && input.id === "month") {
    const month = parseInt(input.value, 10);
    if (month < 1 || month > 12 || isNaN(month)) {
      input.setCustomValidity("Enter a valid value");
    } else {
      input.setCustomValidity("");
    }
  }
}
