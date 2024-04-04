window.addEventListener("load", solve);

function solve() {
    const formBtn = document.getElementById('form-btn');

    const inProgress = document.getElementById('in-progress');
    const finished = document.getElementById('finished');

    let counter = 0;
    let progressCounter = document.getElementById('progress-count');

    const clearBtn = document.getElementById('clear-btn').addEventListener('click', clear)


    let inputFields = document.querySelectorAll('.inner-wrap input, .inner-wrap select, #task');

    let firstName = inputFields[0].value;
    let lastName = inputFields[1].value;
    let age = inputFields[2].value;
    let gender = inputFields[3].value;
    let dishDescription = inputFields[4].value;


    formBtn.addEventListener('click', () =>{

         firstName = inputFields[0].value;
         lastName = inputFields[1].value;
         age = inputFields[2].value;
         gender = inputFields[3].value;
        dishDescription ='Dish description: ' + inputFields[4].value;


        const li = createElement('li', inProgress,null,['each-line']);

        const article = createElement('article',li);
        createElement('h4',article, `${firstName} ${lastName}`);
        createElement('p', article, `${gender}, ${age}`);
        createElement('p', article, dishDescription);
        const editBtn = createElement('button', li, 'Edit', ['edit-btn']);
        const completeBtn = createElement('button', li, 'Mark as complete', ['complete-btn']);

        editBtn.addEventListener('click', editOrder)
        completeBtn.addEventListener('click', finishOrder)
        counter++;
        progressCounter.textContent = counter;
         inputFields[0].value = '';
         inputFields[1].value = '';
         inputFields[2].value = '';
         inputFields[3].value = 'Male';
         inputFields[4].value = '';
    })
    function clear() {
        finished.innerHTML = '';
    }
    function finishOrder(event) {
        const liToAppend = event.target.parentElement;
        liToAppend.removeChild(liToAppend.querySelector('button'))
        liToAppend.removeChild(liToAppend.querySelector('button'))
        finished.appendChild(liToAppend)
        counter--;
        progressCounter.textContent = counter;

    }
    function editOrder(event) {
        const elemets = event.target.parentElement.querySelectorAll('article h4, p, p');
        inputFields[0].value= elemets[0].textContent.split(' ')[0];
        inputFields[1].value = elemets[0].textContent.split(' ')[1];
        inputFields[2].value = elemets[1].textContent.split(', ')[1];
        inputFields[3].value = elemets[1].textContent.split(', ')[0];
        inputFields[4].value = elemets[2].textContent.split(': ')[1];

        counter--;
        progressCounter.textContent = counter;

        event.target.parentElement.remove();
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
