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
      } else if (input.id === "password") {
        const passwordInput = document.querySelector("#password");
        const passwordControl = passwordInput.parentElement;
        const passwordSmall = passwordControl.querySelector("#password~small");
        const passwordRegex =
          /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

        if (passwordRegex.test(passwordInput.value.trim())) {
          passwordSmall.innerText = "SUCCESS";
          passwordControl.className = "input-control success";
        } else {
          passwordSmall.innerText =
            "INVÁLIDA (REQUISITOS: UM CARACTER ESPECIAL, UM MAIUSCULO E UM NUMERO.)";
          passwordControl.className = "input-control error";
        }
      } else if (input.id === "password_confirm") {
        const passwordInput = document.querySelector("#password");
        const passwordConfirmInput =
          document.querySelector("#password_confirm");
        const passwordConfirmControl = passwordConfirmInput.parentElement;
        const passwordConfirmSmall = passwordConfirmControl.querySelector(
          "#password_confirm~small"
        );

        if (passwordInput.value === passwordConfirmInput.value) {
          passwordConfirmSmall.innerText = "SUCCESS";
          passwordConfirmControl.className = "input-control success";
        } else {
          passwordConfirmSmall.innerText = "SENHAS NÃO COINCIDEM";
          passwordConfirmControl.className = "input-control error";
        }
      } else if (input.id === "name") {
        const nameInput = document.querySelector("#name");
        const nameRegex = /^[a-zA-ZÀ-ÿ ]*$/;
        const nameControl = nameInput.parentElement;
        const nameSmall = nameControl.querySelector("#name~small");

        if (nameRegex.test(nameInput.value.trim())) {
          nameSmall.innerText = "SUCCESS";
          nameControl.className = "input-control success";
        } else {
          nameSmall.innerText = "NOME INVALIDO";
          nameControl.className = "input-control error";
        }
      } else if (input.id === "user") {
        const userInput = document.querySelector("#user");
        const userRegex = /^[a-zA-ZÀ-ÿ]+$/;
        const userControl = userInput.parentElement;
        const userSmall = userControl.querySelector("#user~small");

        if (userRegex.test(userInput.value.trim())) {
          userSmall.innerText = "SUCCESS";
          userControl.className = "input-control success";
        } else {
          userSmall.innerText = "USUARIO INVALIDO";
          userControl.className = "input-control error";
        }
      } else if (input.id === "birth") {
        const birthInput = document.querySelector("#birth");
        const birthControl = birthInput.parentElement;
        const birthSmall = birthControl.querySelector("#birth~small");

        const inputDate = new Date(birthInput.value);
        const currentDate = new Date();

        if (currentDate < inputDate) {
          birthSmall.innerText = "DATA INVALIDA";
          birthControl.className = "input-control error";
        } else {
          birthSmall.innerText = "SUCCESS";
          birthControl.className = "input-control success";
        }
      } else {
        inputControl = input.parentElement;
        const small = inputControl.querySelector(`#${input.id}~small`);
        small.innerText = "SUCCESS";
        inputControl.className = "input-control success";
      }
    }
  });
}
