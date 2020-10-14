const numberInput = document.querySelector("#number");
const numberInWordsField = document.querySelector("#words");
const errorTextField = document.querySelector("#error");

numberInput.addEventListener("change", (event) => {
  let inputNumber = Number(event.target.value);

  try {
    const output = numberToWords(inputNumber);
    numberInWordsField.textContent = output;
    errorTextField.innerText = "";
  } catch (error) {
    numberInWordsField.textContent = "";
    errorTextField.innerText = error.message;
  }
});

function numberToWords(inputNumber) {
  if (isNaN(inputNumber)) throw new Error("Not A Number");
  if (!Number.isInteger(inputNumber)) throw new Error("Not An Integer");

  let numberInWords = inputNumber.toString();
  return numberInWords;
}
