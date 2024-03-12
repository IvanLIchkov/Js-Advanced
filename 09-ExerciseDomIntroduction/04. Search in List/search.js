function search() {
   let tableLi = document.getElementById('towns').getElementsByTagName('li');

   const letters = document.getElementById('searchText').value;

   const regex = `\\b\\w*${letters}\\w*\\b`

    document.getElementById('result').textContent='';

    let sumMatches = 0;

    for (const tableLiElement of tableLi) {
        console.log(tableLiElement.textContent)
        tableLiElement.style.fontWeight = 'normal';
        tableLiElement.style.textDecoration = 'none'
        if (tableLiElement.textContent.match(regex)){
            tableLiElement.style.fontWeight = 'Bold';
            tableLiElement.style.textDecoration = 'Underline'
            sumMatches++;
        }
    }
    document.getElementById('result').textContent=`${sumMatches} matches found`
}
