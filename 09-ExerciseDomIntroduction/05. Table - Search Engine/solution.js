function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      const string = document.getElementById('searchField').value.toLowerCase();
      const table = document.querySelector('tbody').querySelectorAll('tr');
      const regex = `\\b\\w*${string}\\w*\\b`
      for (const tr of table) {
         tr.className = '';
         let elements = tr.querySelectorAll('td');
         for (const element of elements) {
            const stringToMatch = element.textContent.toLowerCase();
            if(stringToMatch.match(regex)){
               tr.className = 'select';
               break;
            }
         }
      }
   }
}
