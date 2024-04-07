window.addEventListener('load', solve);

function solve() {

    const addButton = document.getElementById('add-btn');
    addButton.addEventListener('click', addEvent);

    const allInput = document.querySelectorAll('#form div input');
    let time = allInput[0];
    let date = allInput[1];
    let place = allInput[2];
    let eventName = allInput[3];
    let contacts = allInput[4];

    const lastChecked = document.getElementById('check-list');
    const upcomingList = document.getElementById('upcoming-list');
    const finishedList = document.getElementById('finished-list')
    const clearBtn = document.getElementById('clear');
    clearBtn.addEventListener('click', clearEvent);


    function addEvent() {
        const liForAppend = createElement('li', lastChecked, null, ['event-content']);
        const articleForAppend = createElement('article', liForAppend);
        createElement('p',articleForAppend, `Begins: ${date.value} at: ${time.value}`);
        createElement('p',articleForAppend, `In: ${place.value}`);
        createElement('p',articleForAppend, `Event: ${eventName.value}`);
        createElement('p',articleForAppend, `Contact: ${contacts.value}`);

        const editBtn = createElement('button', liForAppend,'Edit', ['edit-btn']);
        const continueBtn = createElement('button', liForAppend,'Continue', ['continue-btn']);

        editBtn.addEventListener('click', editEvent);
        continueBtn.addEventListener('click', continueEvent)


        addButton.disabled = true;
        time.value = '';
        date.value = '';
        place.value = '';
        eventName.value = '';
        contacts.value = '';
    }
    function continueEvent(event) {
        const liElement = event.target.parentNode;
        liElement.removeChild(liElement.querySelector('button'))
        liElement.removeChild(liElement.querySelector('button'))

        const moveToFinishButton = createElement('button', liElement,'Move to Finished', ['finished-btn']);
        addButton.disabled = false;

        moveToFinishButton.addEventListener('click', finishEvent)

        liElement.remove();

        upcomingList.appendChild(liElement);
    }
    function finishEvent(event) {
        const liElement = event.target.parentNode;
        liElement.removeChild(liElement.querySelector('button'));
        liElement.remove();
        finishedList.appendChild(liElement);
    }
    function clearEvent(event){
        event.target.parentNode.querySelector('li').remove();
    }
    function editEvent(event) {
        const information = event.target.parentNode.querySelectorAll('article p');
        let [nothing, dateText, nothing1, timeText] = information[0].textContent.split(' ');
        let placeText = information[1].textContent.split('In: ')[1];
        let eventNameText = information[2].textContent.split('Event: ')[1];
        let contactText = information[3].textContent.split('Contact: ')[1];

        time.value = timeText;
        date.value = dateText;
        place.value = placeText;
        eventName.value = eventNameText;
        contacts.value = contactText;

        event.target.parentNode.remove();
        addButton.disabled = false;
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




