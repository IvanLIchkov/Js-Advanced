window.addEventListener("load", solve);

function solve() {
  const formFields = document.querySelectorAll('.inner-wrap label input, select, .inner-wrap textarea');
    const firstNameField = formFields[0];
    const lastNameField = formFields[1];
    const ageField = formFields[2];
    const storyTitleField = formFields[3];
    const genreField = formFields[4];

    const storyField =formFields[5];

    const publishBtn = document.getElementById('form-btn');
    publishBtn.addEventListener('click', publishStory)

    const previewList   = document.getElementById('preview-list');


    function publishStory() {
        if(firstNameField.value === ''|| lastNameField.value === '' || ageField.value === '' || storyTitleField.value === '' ||
        storyField.value === ''){
            return;
        }

        const li = createElement('li', previewList,null,['story-info']);
        const article = createElement('article', li);
        createElement('h4', article, `Name: ${firstNameField.value} ${lastNameField.value}`)
        createElement('p', article, `Age: ${ageField.value}`)
        createElement('p', article, `Title: ${storyTitleField.value}`)
        createElement('p', article, `Genre: ${genreField.value}`)
        createElement('p', article, `${storyField.value}`)

        const saveBtn = createElement('button', li,'Save Story', ['save-btn']);
        const editBtn = createElement('button', li,'Edit Story', ['edit-btn']);
        const deleteBtn = createElement('button', li,'Delete Story', ['delete-btn']);

        editBtn.addEventListener('click', editStory);
        saveBtn.addEventListener('click', saveStory);
        deleteBtn.addEventListener('click', deleteStory)


        firstNameField.value = '';
        lastNameField.value = '';
        ageField.value = '';
        storyTitleField.value = '';
        genreField.value = 'Disturbing';
        storyField.value = '';

        publishBtn.disabled = true;
    }
    function editStory(event) {
        publishBtn.removeAttribute('disabled');
       const elementNodeListOf = event.target.parentNode.querySelectorAll('article h4, p, p, p, p');
        [firstNameField.value, lastNameField.value] = elementNodeListOf[0].textContent.replace('Name: ', '').split(' ');
        ageField.value = elementNodeListOf[1].textContent.split('Age: ')[1];
        storyTitleField.value = elementNodeListOf[2].textContent.split('Title: ')[1];
        genreField.value = elementNodeListOf[3].textContent.split('Genre: ')[1];
        storyField.value = elementNodeListOf[4].textContent;

        previewList.querySelector('li').remove();
    }

    function saveStory() {
        const mainDiv = document.getElementById('main');
        mainDiv.innerHTML = '';
        createElement('h1', mainDiv, 'Your scary story is saved!');
    }
    function deleteStory() {
        previewList.querySelector('li').remove();
        publishBtn.removeAttribute('disabled')
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
