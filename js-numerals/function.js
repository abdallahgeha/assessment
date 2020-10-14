const onesAndTeens = [
  "",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
  "eleven",
  "twelve",
  "thirteen",
  "forteen",
  "fifteen",
  "sixteen",
  "seventeen",
  "eighteen",
  "nineteen",
];

const tens = [
  "",
  "ten",
  "twenty",
  "thirty",
  "forty",
  "fifty",
  "sixty",
  "seventy",
  "eighty",
  "ninety",
];

const mills = ["", "thousand", "million", "billion", "trillion", "quadrillion"];

function threeDigitAnalysis(threeDigit) {
  let number = parseInt(threeDigit);

  if (number === 0) return "zero";
  if (number < 20) return teensToWord(number);
  if (number < 100) return twoDigitToWord(number);
  if (number < 1000) return threeDigitToWord(number);
}

function teensToWord(twoDigit) {
  return onesAndTeens[twoDigit];
}

function twoDigitToWord(twoDigit) {
  let digitStr = twoDigit.toString();

  if (twoDigit < 20) return teensToWord(twoDigit);

  let one = parseInt(digitStr[1]);
  let ten = parseInt(digitStr[0]);

  return onesAndTeens[one] ? tens[ten] + "-" + onesAndTeens[one] : tens[ten];
}

function threeDigitToWord(threeDigit) {
  let digitStr = threeDigit.toString();

  let hund = digitStr[0];
  let ten = parseInt(digitStr[1] + digitStr[2]);

  let tensToWord = twoDigitToWord(ten);
  let hundToWord = onesAndTeens[hund];

  if (!hundToWord) return tensToWord;
  if (!tensToWord) return hundToWord + " hundred";
  return hundToWord + " hundred " + tensToWord;
}

const functions = {
  numberToWords: (inputNumber) => {
    if (isNaN(inputNumber)) throw new Error("Not A Number");
    if (!Number.isInteger(inputNumber)) throw new Error("Not An Integer");
    if (inputNumber > Number.MAX_SAFE_INTEGER)
      throw new Error("Number Is Too Large for JS :(");

    if (inputNumber === "") return "";
    if (inputNumber === 0) return "zero";
    let numberStr = inputNumber.toString();
    let numberInWords = "";
    let magnitude = 0;

    while (numberStr.length > 0) {
      let lastThreeDigit = numberStr.substring(numberStr.length - 3);
      let concat = threeDigitAnalysis(lastThreeDigit);

      numberInWords =
        concat && concat !== "zero"
          ? concat + " " + mills[magnitude] + " " + numberInWords
          : numberInWords;

      numberStr = numberStr.slice(0, -3);
      magnitude++;
    }

    return numberInWords.trim();
  },
};

module.exports = functions;
