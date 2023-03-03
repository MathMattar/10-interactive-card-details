export default function checkNumber() {
  const numberInput = document.getElementById("number");

  if (numberInput.ariaValueMax.includes(" ")) {
    numberInput.setAttribute("minlength", "19");
  } else {
    numberInput.setAttribute("minlength", "16")
  }
}
