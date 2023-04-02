const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const isValid = check();

  if (isValid) {
    form.submit();
  }
});

function check() {
  const inputs = form.querySelectorAll("input");

  let isValid = true;

  const correctPassword = "Admin123!";
  const correctUser = "admin";

  inputs.forEach(function (input) {
    console.log(input.value.trim());
    if (!input.value.trim().length) {
      inputControl = input.parentElement;

      const small = inputControl.querySelector(`#${input.id}~small`);
      small.innerText = "EMPTY FIELD";
      inputControl.className = "input-control error";

      isValid = false;
    } else {
      if (input.id === "user") {
        const userInput = document.querySelector("#user");
        const userRegex = /^[a-zA-Z]+$/;
        const userControl = userInput.parentElement;
        const userSmall = userControl.querySelector("#user~small");

        if (
          userRegex.test(userInput.value.trim()) &&
          userInput.value === correctUser
        ) {
          userSmall.innerText = "SUCCESS";
          userControl.className = "input-control success";
        } else {
          userSmall.innerText = "INVALID USER";
          userControl.className = "input-control error";
          isValid = false;
        }
      } else if (input.id === "password") {
        const passwordInput = document.querySelector("#password");
        const passwordControl = passwordInput.parentElement;
        const passwordSmall = passwordControl.querySelector("#password~small");
        const passwordRegex =
          /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

        if (
          passwordRegex.test(passwordInput.value.trim()) &&
          passwordInput.value === correctPassword
        ) {
          passwordSmall.innerText = "SUCCESS";
          passwordControl.className = "input-control success";
        } else {
          passwordSmall.innerText = "INVALID PASSWORD";
          passwordControl.className = "input-control error";
          isValid = false;
        }
      } else {
        inputControl = input.parentElement;
        const small = inputControl.querySelector(`#${input.id}~small`);
        small.innerText = "SUCCESS";
        inputControl.className = "input-control success";
      }
    }
  });

  return isValid;
}
