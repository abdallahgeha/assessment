const numberInput = document.querySelector("#number");
const numberInWordsField = document.querySelector("#words");
const errorTextField = document.querySelector("#error");

numberInput.addEventListener("input", (event) => {
  let inputNumber = Number(event.target.value);
  let negative = "";

  try {
    if (inputNumber < 0) {
      inputNumber = Math.abs(inputNumber);
      negative = "negative ";
    }
    const output = functions.numberToWords(inputNumber);
    numberInWordsField.textContent = negative + output;
    errorTextField.innerText = "";
  } catch (error) {
    numberInWordsField.textContent = "";
    errorTextField.innerText = error.message;
  }
});
