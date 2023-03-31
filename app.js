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
})

function check(){
    // const nameValue = name.value.trim();
    // const userValue = user.value.trim();
    // const birthValue = birth.value.trim();
    // const emailValue = email.value.trim();
    // const passwordValue = password.value.trim();
    // const password_confirmValue = password_confirm.value.trim();

    // const vet = {
    //     name: name.value.trim(), 
    //     user: user.value.trim(),
    //     birth: birth.value.trim()
    // };

    const inputs = form.querySelectorAll('input');
    
    let hasEmptyInput = false;
    let emptyInputId = '';
    
    inputs.forEach(function(input){
        if(input.value.trim() === ''){
            hasEmptyInput = true;
            emptyInputId = input.id;
            inputControl = input.parentElement;
        }
    })
    // if(nameValue === ''){
    //     errorValidation(name, "Campo Vazio");
    // } else {

    // }
    
    // if(inp === ''){
    //     errorValidation(inp, "campo vazio")

    // }
    errorValidation(inputControl, "campo vazio");
    
}



function errorValidation(input, message){
    const inputControl = input.parentElement;
    const small = inputControl.querySelector('small');
    
    small.innerText = message;

    inputControl.className = 'input-control error';
}
