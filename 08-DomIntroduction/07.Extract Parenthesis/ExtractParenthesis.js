function extract(content) {

    let text = document.getElementById(content).textContent;
    const regex = /\(([^)]+)\)/g;

    const output = [];
    let match;
    while ((match = regex.exec(text)) != null){
        output.push(match[1]);
    }
    return output.join("; ");
}
let text = extract("content");
