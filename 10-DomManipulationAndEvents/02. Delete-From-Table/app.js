function deleteByEmail() {
    const email = document.querySelector('input').value;
    let trs = document.querySelectorAll("tbody tr");
    const result = document.getElementById('result');
    for (const tr of trs) {
        let emailForCheck = tr.querySelectorAll('td')[1].textContent;
        if (email === emailForCheck){
            tr.remove();
            result.textContent = 'Deleted.';
            return;
        }
    }
    result.textContent = 'Not found.';
}
