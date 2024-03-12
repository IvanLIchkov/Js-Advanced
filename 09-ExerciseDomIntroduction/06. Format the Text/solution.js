function solve() {
    const sentences = document.getElementById('input').value.split('.');
    let length = sentences.length;
    let output = '';
    output = makeP(length);
    document.getElementById('output').innerHTML = output;
    function makeP(length) {
        output +='<p>';
        for (let i = 0; i <= length; i++) {
            if (length === 1){
                output+=sentences[0];
                output+=`</p>`;
                return output;
            }
            output+=sentences[0]+'.';
            sentences.shift()
            length--;
            if (i===2){
                break;
            }
        }
        output+=`</p>\n`;
        return makeP(length);
    }
}
