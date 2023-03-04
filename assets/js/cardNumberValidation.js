export default function numberValidation(input) {
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
