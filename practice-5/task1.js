function Calculator() {
}

Calculator.prototype.sum = function(a, b) {
  return a + b;
};

Calculator.prototype.subtract = function(a, b) {
  return a - b;
};

function AdvancedCalculator() {
  Calculator.call(this);
}

AdvancedCalculator.prototype.multiply = function(a, b) {
  return a * b;
};

AdvancedCalculator.prototype.divide = function(a, b) {
  return a / b;
};
