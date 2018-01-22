window.addEventListener("load", function() {
  var pass = document.querySelectorAll(".form__input[type='password']")[0],
    passConfirm = document.querySelectorAll(".form__input[type='password']")[1];

  function validPass() {
    if (pass.value == passConfirm.value) {
      passConfirm.setCustomValidity("");
    } else {
      passConfirm.setCustomValidity("Your password don't match");
      passConfirm.style.border = "1px solid red";
    }
    
  }

  passConfirm.addEventListener("blur", validPass);
})