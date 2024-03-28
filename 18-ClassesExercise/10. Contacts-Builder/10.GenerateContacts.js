function generateContacts() {
    class Contact {

        firstName;
        lastName;
        phoneNumber;
        email;
        online;

        constructor(firstName, lastName, phoneNumber, email) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.phoneNumber = phoneNumber;
            this.email = email;
            this.online = false;
        }
        render(divId){
            const mainDiv = document.getElementById(divId);
            const article = createElement('article', mainDiv);
            const titleDiv = createElement('div', article,`${this.firstName} ${this.lastName}`,['title']);
            titleDiv.setAttribute('data-firstname', this.firstName);
            titleDiv.setAttribute('data-lastname', this.lastName);

            if(this.online){
                titleDiv.classList.add('online');
            }
            const infoButton = createElement('button',titleDiv,'&#8505;', null, null, null, true);
            infoButton.addEventListener('click',moreInfo);

            const divInfo = createElement('div',article,null,['info']);
            createElement('span',divInfo,`&phone; ${this.phoneNumber}`,null, null, null, true)
            createElement('span',divInfo,`&#9993; ${this.email}`,null, null, null, true)
            divInfo.style.display = 'none';
            mainDiv.appendChild(article);
        }
        set makeOnline(value){
            this.online = value;
            if (value === true){
                this.changeStatus();
            }
        }
        get makeOnline(){
            return this.online;
        }
        changeStatus(){
            const titleDiv = document.querySelector(`.title[data-firstname="${this.firstName}"][data-lastname="${this.lastName}"]`);
            if (titleDiv) {
                if (this.online) {
                    titleDiv.classList.add('online');
                } else {
                    titleDiv.classList.remove('online');
                }
            }
        }
    }
    let contacts = [
        new Contact("Ivan", "Ivanov", "0888 123 456", "i.ivanov@gmail.com"),
        new Contact("Maria", "Petrova", "0899 987 654", "mar4eto@abv.bg"),
        new Contact("Jordan", "Kirov", "0988 456 789", "jordk@gmail.com")
    ];
    contacts.forEach(c => c.render('main'));
    // After 1 second, change the online status to true
    setTimeout(() => contacts[1].makeOnline = true, 2000);
    function moreInfo(event) {
        const infoDiv = event.target.parentNode.parentNode.lastChild;
        if (infoDiv.style.display === 'none'){
            infoDiv.style.display = 'block'
        }else{
            infoDiv.style.display = 'none'
        }
    }
    function createElement(
        type,
        parentNode,
        content,
        classes,
        id,
        attributes,
        useInnerHtml
    ) {
        const htmlElement = document.createElement(type);

        if (content && useInnerHtml) {
            htmlElement.innerHTML = content;
        } else {
            if (content && type !== "input") {
                htmlElement.textContent = content;
            }

            if (content && type === "input") {
                htmlElement.value = content;
            }
        }

        if (classes && classes.length > 0) {
            htmlElement.classList.add(...classes);
        }

        if (id) {
            htmlElement.id = id;
        }

        // { src: 'link', href: 'http' }
        if (attributes) {
            for (const key in attributes) {
                htmlElement.setAttribute(key, attributes[key]);
            }
        }

        if (parentNode) {
            parentNode.appendChild(htmlElement);
        }

        return htmlElement;
    }
}


generateContacts();
