// Calculate Mortgage

const amountInput = document.querySelector("#mortgage-amount");
const termInput = document.querySelector("#mortgage-term");
const interestInput = document.querySelector("#interest-rate");
const repaymentRadio = document.querySelector("#repayment");
const interestRadio = document.querySelector("interest");

const calculateBtn = document.querySelector(".calculate-btn");

calculateBtn.addEventListener("click", (e) => {
  e.preventDefault();

  checkForError();

  // calculateMortgage();
});

// Errors

let errorAmount = false;
let errorYear = false;
let errorMonth = false;
let errorType = false;

const checkForError = function () {
  Number(amountInput.value) === 0
    ? (toggleError(true, amountInput), (errorAmount = true))
    : (toggleError(false, amountInput), (errorAmount = false));

    Number(termInput.value) === 0
    ? (toggleError(true, termInput), (errorAmount = true))
    : (toggleError(false, termInput), (errorAmount = false));

    Number(interestInput.value) === 0
    ? (toggleError(true, interestInput), (errorAmount = true))
    : (toggleError(false, interestInput), (errorAmount = false));

  };

// toggle Error

const toggleError = function (showError, input) {
  if (showError) {
    input.parentElement.classList.add("error");
    input.parentElement.nextElementSibling.classList.remove("hidden"); // console.log("error")
  } else {
    input.parentElement.classList.remove("error");
    input.parentElement.nextElementSibling.classList.add("hidden"); // console.log("error")
  }
};
