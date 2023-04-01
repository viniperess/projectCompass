const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  check();
});

function check() {
  const inputs = form.querySelectorAll("input");

  inputs.forEach(function (input) {
    console.log(input.value.trim());
    if (!input.value.trim().length) {
      inputControl = input.parentElement;

      const small = inputControl.querySelector(`#${input.id}~small`);
      small.innerText = "CAMPO VAZIO";
      inputControl.className = "input-control error";
    } else {
      if (input.id === "email") {
        const emailInput = document.querySelector("#email");
        const emailControl = emailInput.parentElement;
        const emailSmall = emailControl.querySelector("#email~small");
        const emailRegex = /^\S+@\S+\.\S+$/;

        if (emailRegex.test(emailInput.value.trim())) {
          emailSmall.innerText = "SUCCESS";
          emailControl.className = "input-control success";
        } else {
          emailSmall.innerText = "E-MAIL INVÁLIDO";
          emailControl.className = "input-control error";
        }
      }
      else if (input.id === 'password'){

        const passwordInput = document.querySelector('#password');
        const passwordControl = passwordInput.parentElement;
        const passwordSmall = passwordControl.querySelector('#password~small');

        if(passwordInput.value.trim().length >= 8){
          passwordSmall.innerText = 'SUCCESS';
          passwordControl.className = 'input-control success';
        }else{
          passwordSmall.innerText = 'SENHA INVÁLIDA';
          passwordControl.className = 'input-control error';
        }
      }
      else if(input.id === 'password_confirm'){
        const passwordInput = document.querySelector('#password');
        const passwordConfirmInput = document.querySelector('#password_confirm');
        const passwordConfirmControl = passwordConfirmInput.parentElement;
        const passwordConfirmSmall = passwordConfirmControl.querySelector('#password_confirm~small');

        if(passwordInput.value === passwordConfirmInput.value)
        {
          passwordConfirmSmall.innerText = 'SUCCESS';
          passwordConfirmControl.className = 'input-control success';
        } else {
          passwordConfirmSmall.innerText = 'SENHAS NÃO COINCIDEM';
          passwordConfirmControl.className = 'input-control error';
        }

      }
      
     else {
        inputControl = input.parentElement;
        const small = inputControl.querySelector(`#${input.id}~small`);
        small.innerText = "SUCCESS";
        inputControl.className = "input-control success";
      }
    }
  });
}
