function myFunction(){

  // Variables
  var buttonEntries = [];
  var screenText = document.getElementById('screenText');
  var answers = [];
  var evalExpression;

  // Functions
  function setScreenText(text) {
    screenText.innerHTML = text;
  }

  function storeValue() {
    buttonEntries.push(this.firstElementChild.innerHTML);
    setScreenText(buttonEntries.join(''));
  };

  function clearArray(arr) {
    arr.length = 0;
  }

  function isValidSyntax(array){

    if (isNaN(array[0])) {
      return false;
    }
    for(var i = 0; i < array.length; i++) {
      if (isNaN(array[i]) && isNaN(array[i+1])) {
        return false;
      }
    }
    return true;
  } // End of isValidSyntax

  function clearAll(){
    clearArray(buttonEntries);
    setScreenText("");
  }

  function evaluateExpression(){
    expression = buttonEntries.splice(0);

    if (answers[0] !== null && isNaN(expression[0]) && expression[0] !== "."){
      expression.unshift(answers[0]);
    }

    if (isValidSyntax(expression)) {
      expression = expression.join('');
      var result = eval(expression);
      setScreenText(result);
      answers.unshift(result);
    } else {
      setScreenText("Syntax Error");
    }
  } //End of evaluateExpression

  // Bind storeValue functiond to button click events
  $('.num').on("click", storeValue);
  $('#decimal').on("click", storeValue);
  $('.operator').on("click", storeValue);
  $('#clear').on("click", clearAll);
  $('#eval').on("click", evaluateExpression);

}
