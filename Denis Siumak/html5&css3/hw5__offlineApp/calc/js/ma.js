window.onload = function() {
  var a = document.getElementById("first"),
    b = document.getElementById("second"),
    sum = document.getElementById("sum"),
    sub = document.getElementById("sub"),
    div = document.getElementById("div"),
    mul = document.getElementById("mul"),
    result = document.getElementById("result"),
    total = 0;
  
  // sum.onclick = function() {
  //   total = calc(a, b, sum);
  //   result.innerHTML = "Result is " + total; 
  // }
  // sub.onclick = function() {
  //   total = calc(a, b, sub);
  //   result.innerHTML = "Result is " + total; 
  // }
  // div.onclick = function() {
  //   total = calc(a, b, div);
  //   result.innerHTML = "Result is " + total; 
  // }
  // mul.onclick = function() {
  //   total = calc(a, b, mul);
  //   result.innerHTML = "Result is " + total; 
  // }
  
  sum.addEventListener("click", function() {
    total = calc(a, b, sum);
    result.innerHTML = "Result is " + total; 
  }, false); 
  sub.addEventListener("click", function() {
    total = calc(a, b, sub);
    result.innerHTML = "Result is " + total; 
  }, false); 
  div.addEventListener("click", function() {
    total = calc(a, b, div);
    result.innerHTML = "Result is " + total; 
  }, false); 
  mul.addEventListener("click", function() {
    total = calc(a, b, mul);
    result.innerHTML = "Result is " + total; 
  }, false); 
  
  function calc(a, b, operator) {
    switch (operator.innerHTML) {
      case "+":
        return parseInt(a.value) + parseInt(b.value);
        break;
      case "-":
        return parseInt(a.value) - parseInt(b.value);
        break;
      case "/":
        return parseInt(a.value) / parseInt(b.value);
        break;
      case "*":
        return parseInt(a.value) * parseInt(b.value);
        break;
    }
  }
}