const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    check(); 
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
        } 
          else {
            const emailInput = document.querySelector('#email');
            const emailControl = emailInput.parentElement;
            const emailSmall = emailControl.querySelector('#email~small');
            const emailRegex = /^\S+@\S+\.\S+$/;
            
            if (emailRegex.test(emailInput.value.trim())) {
                emailSmall.innerText = 'SUCCESS';
                emailControl.className = 'input-control success';
            } else {
                emailSmall.innerText = 'E-MAIL INVÁLIDO';
                emailControl.className = 'input-control error';
            }
        }
    })

}

