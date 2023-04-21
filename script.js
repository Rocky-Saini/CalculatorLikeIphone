let result = document.getElementById("result");

function appendValue(value) {
  result.value += value;
}

function clearResult() {
  result.value = "";
}

function calculate() {
  let expression = result.value;
  let answer = eval(expression);
  result.value = answer;
}

function clearText() {
  result.value = result.value.substring(0, result.value.length - 1);
}
