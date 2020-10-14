const assert = require("assert");
const { numberToWords } = require("../function");

const assertNumber = (number, words) => {
  it("Should convert numbers to words correctly", function () {
    assert.strictEqual(numberToWords(number), words);
  });
};

describe("Number To Word", function () {
  assertNumber(0, "zero");
  assertNumber(1, "one");
  assertNumber(6, "six");
  assertNumber(11, "eleven");
  assertNumber(20, "twenty");
  assertNumber(22, "twenty-two");
  assertNumber(123, "one hundred twenty-three");
  assertNumber(1400, "one thousand four hundred");
  assertNumber(9999, "nine thousand nine hundred ninety-nine");
  assertNumber(
    119900000993,
    "one hundred nineteen billion nine hundred million nine hundred ninety-three"
  );
});
