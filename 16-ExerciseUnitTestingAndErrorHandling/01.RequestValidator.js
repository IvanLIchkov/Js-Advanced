function requestValidator(request) {
    const {method, uri, version, message} = request;
    const validMethod = ['GET', 'POST', 'DELETE', 'CONNECT'];
    const validVersions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];

    const uriPatters = /^([\w.])+$|^\*$/;

    const messagePattern = /^[^<>\\$'"]+$/;

    const errorMessage = (typeOfParam) => {
        throw new Error(`Invalid request header: Invalid ${typeOfParam}`);
    }

    if (!validMethod.includes(method) || !method){
        (errorMessage('Method'));
    }if (!validVersions.includes(version) || !version){
        (errorMessage('Version'));
    }if(!uriPatters.exec(uri) || !uri){
        (errorMessage('URI'));
    }if (!(request.hasOwnProperty('message')) || !(message === '' || messagePattern.test(message))){
        errorMessage('Message')

    }
    return request
}


console.log(requestValidator({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
}));
//
// requestValidator({
//         method: 'OPTIONS',
//         uri: 'git.master',
//         version: 'HTTP/1.1',
//         message: '-recursive'
//     })

// requestValidator({
//     method: 'POST',
//     uri: 'home.bash',
//     version: 'HTTP/2.0'
//
//     })
