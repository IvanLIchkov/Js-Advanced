function validate() {
    const inputField = document.getElementById('email');
    inputField.addEventListener('change', checkForValidEmail);

    function checkForValidEmail(event) {
        let email = event.target.value;
        const emailRegex = RegExp(/^([\w\-.]+)@([a-z]+)(\.[a-z]+)+$/);
        if(email.match(emailRegex)){
            inputField.removeAttribute('class')
            return;
        }
            inputField.classList.add("error")

    }
}
