let result = document.getElementById("result");
let firstNumber, secondNumber;

function calculation() {
  result.innerHTML = "1";
}

function getOperation() {
  let sum = document.getElementById("+");
  console.log(1 + 2);
}

const el = document.getElementById("calc");
el.addEventListener("click", showResult, false);

function showResult() {
  result.innerHTML = this;
  console.log(this);
  
}
