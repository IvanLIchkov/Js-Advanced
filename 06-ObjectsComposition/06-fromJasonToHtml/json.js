function solve(dateAsJson) {

    const result = [];

    result.push('<table>');

    const data =  JSON.parse(dateAsJson);
    const props = Object.keys(data[0]);

    result.push(`    <tr>${props.map(p => `<th>${p}</th>`).join('')}</tr>`);

    for (const entry of data) {
        result.push(`    <tr>${props.map(p => `<td>${entry[p]}</td>`).join('')}</tr>`);

    }
    result.push('</table>');

    return result.join('\n');
}

console.log(solve(`[{"Name":"Stamat",
    "Score":5.5},
   {"Name":"Rumen",
    "Score":6}]`
));
console.log(solve(`[{"Name":"Pesho",
    "Score":4,
    " Grade":8},
   {"Name":"Gosho",
    "Score":5,
    " Grade":8},
   {"Name":"Angel",
    "Score":5.50,
    " Grade":10}]`));

