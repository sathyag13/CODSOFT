let expression = '';

function appendValue(value) {
  expression += value;
  document.getElementById('display').value = expression;
}

function clearDisplay() {
  expression = '';
  document.getElementById('display').value = expression;
}

function calculateResult() {
  try {
    const result = eval(expression);
    expression = result;
    document.getElementById('display').value = result;
  } catch (error) {
    expression = '';
    document.getElementById('display').value = 'Error';
  }
}