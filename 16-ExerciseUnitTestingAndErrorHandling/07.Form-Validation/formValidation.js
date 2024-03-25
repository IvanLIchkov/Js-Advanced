function validate() {
   const submitButton = document.getElementById('submit');
   submitButton.addEventListener('click',validateData);

   const allFormInputFields = document.querySelectorAll("#userInfo input");
    const companyInfo = document.getElementById('companyInfo');
    const companyNumber = document.getElementById('companyNumber')
    const checkbox = allFormInputFields[4];
    const validField = document.getElementById('valid');

    let valid = true;

    checkbox.addEventListener('change', () => {

        if(checkbox.checked){
            companyInfo.style.display = 'block';
        }else{
            companyInfo.style.display = 'none';
        }
        validateData(event);
    })
    function validateData(event) {
        valid = true;
        event.preventDefault();
        let usernameField = allFormInputFields[0];
        let emailField = allFormInputFields[1];
        let passwordField = allFormInputFields[2];
        let confirmPasswordField = allFormInputFields[3];


        if(!usernameField.value.match(/^(?=.{3,20}$)[a-zA-Z0-9]+$/)){
            usernameField.style.borderColor = 'red';
            valid = false;
        }else{
            usernameField.style.border = 'none'
        }if (!passwordField.value.match(/^\w{5,15}$/) || !confirmPasswordField.value.match(/^\w{5,15}$/)){
            passwordField.style.borderColor = 'red';
            confirmPasswordField.style.borderColor = 'red';
            valid = false;

        }else if (passwordField.value !== confirmPasswordField.value){
            passwordField.style.borderColor = 'red';
            confirmPasswordField.style.borderColor = 'red';
            valid = false;

        }else{
            passwordField.style.border = 'none';
            confirmPasswordField.style.border = 'none';
        }if(!emailField.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)){
            emailField.style.borderColor = 'red';
            valid = false;

        }else{
            emailField.style.border = 'none';
        }
        if (checkbox.checked){
            if ( companyNumber.value <1000 || companyNumber.value > 9999){
                companyNumber.style.borderColor = 'red';
                companyNumber.style.border = 'normal';
               valid = false;

            }else{
                companyNumber.style.border = 'none';
            }
        }
        if (valid){
            validField.style.display = 'block'
        }else{
            validField.style.display = 'none'
        }
    }
}
