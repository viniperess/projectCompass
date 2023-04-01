const form = document.getElementById('form');
// const name = document.getElementById('name');
// const user = document.getElementById('user');
// const birth = document.getElementById('birth');
// const email = document.getElementById('email');
// const password = document.getElementById('password');
// const password_confirm = document.getElementById('password_confirm');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    check(); 
});

const emails = document.querySelector('#email');
   
  emails.addEventListener('input', function() {
  const emailInput = emails.value;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(emails)) {


    emailControl = email.parentElement;

    const small = emailControl.querySelector(`#${email.id}~small`);
    console.log(small,"aqiu");

    small.innerText = "Email errado";
    emailControl.className = 'input-control error';
    
  } else {
    emailControl = email.parentElement;

    const small = emailControl.querySelector(`#${email.id}~small`);
    small.innerText = "Email sucess";
    emailControl.className = 'input-control success';
    
  }
});


function check(){

    const inputs = form.querySelectorAll('input');
    
    let hasEmptyInput = false;
    let emptyInputId = '';
    

    inputs.forEach(function(input){
        console.log(input.value.trim());
        if(!input.value.trim().length){
            hasEmptyInput = true;
            emptyInputId = input.id;
            inputControl = input.parentElement;

            const small = inputControl.querySelector(`#${input.id}~small`);
            small.innerText = "CAMPO VAZIO";
            inputControl.className = 'input-control error';
        } else {

            inputControl = input.parentElement;
            const small = inputControl.querySelector(`#${input.id}~small`);
            small.innerText = "SUCCESS";
            inputControl.className = "input-control success";
        }
    })

}

