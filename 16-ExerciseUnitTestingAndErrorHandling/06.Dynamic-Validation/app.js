function validate() {
    const regexEmailValidation  = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    const emailField = document.getElementById('email');

    emailField.addEventListener('change', () =>{
        if (!(emailField.value).match(regexEmailValidation)){
            emailField.classList.add('error');
        }else{
            emailField.classList.remove('error');
        }
    })

}
