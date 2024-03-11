function extractText() {
   const li = document.getElementById('items')
       .getElementsByTagName('li');
   const arr = [];
    for (let liElement of li) {
        arr.push(liElement.textContent);
    }
    document.getElementById('result').textContent = arr.join('\n');
}
