function addItem() {
    let liElement = document.createElement('li');
    liElement.textContent = document.getElementById('newItemText').value;

    let deleteBtn = document.createElement('a');
    deleteBtn.textContent = '[Delete]';
    deleteBtn.href = '#'
    liElement.appendChild(deleteBtn);

    deleteBtn.addEventListener('click',() => liElement.remove())
    document.getElementById('items').appendChild(liElement);

}
