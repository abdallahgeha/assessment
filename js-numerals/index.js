const numberInput = document.querySelector("#number");
const numberInWordsField = document.querySelector("#words");
const errorTextField = document.querySelector("#error");

numberInput.addEventListener("input", (event) => {
  if (event.target.value == "") {
    numberInWordsField.textContent = "";
    errorTextField.textContent = "";
    return;
  }

  let inputNumber = Number(event.target.value);
  let negative = "";

  try {
    if (inputNumber < 0) {
      inputNumber = Math.abs(inputNumber);
      negative = "negative ";
    }
    const output = functions.numberToWords(inputNumber);
    numberInWordsField.textContent = negative + output;
    errorTextField.textContent = "";
  } catch (error) {
    numberInWordsField.textContent = "";
    errorTextField.textContent = error.message;
  }
});
