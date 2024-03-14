function focused() {

    for (const input of document.querySelectorAll("input")) {
        input.addEventListener('focus', focusBox);
        input.addEventListener('blur', focusOutBox);
    }
    function focusBox(event) {
        event.target.parentElement.classList.add('focused');
    }
    function focusOutBox(event) {
        event.target.parentElement.classList.remove('focused');

    }
}
