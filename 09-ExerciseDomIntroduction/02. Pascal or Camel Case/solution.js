function solve() {
    let textContent = document.getElementById('text').value;
    let namingConvention = document.getElementById('naming-convention').value;

    let words = textContent.split(" ").map(w =>{
       return  w.charAt(0).toUpperCase() + w.slice(1).toLowerCase();
    });

    let result;

    if(namingConvention === "Camel Case"){
        words[0] = words[0].charAt(0).toLowerCase() + words[0].slice(1);
        result  = words.join('');
    }else if (namingConvention === "Pascal Case"){
        result  = words.join('');
    }else{
        result = 'Error!'
    }
    document.getElementById('result').textContent = result;
}
