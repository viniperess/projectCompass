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
            small.innerText = "SUCESS";
            inputControl.className = "input-control sucess";
        }
    })
    
}

