function sumTable() {
    const tr = document.getElementsByTagName('tr');
    let sum = 0;
    for (let i = 1; i < tr.length; i++) {
        let trElement = tr[i];
        sum+= Number(trElement.lastElementChild.textContent);
    }
    document.getElementById('sum').textContent = `${sum}`;
}
