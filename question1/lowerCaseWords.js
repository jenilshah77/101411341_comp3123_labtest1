function lowerCaseWords(array) {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(array)) {
            reject(" The Provided Input is not an array");
        } else {
            const Elements = array
                .filter(item => typeof item === 'string')
                .map(word => word.toLowerCase());
            resolve(Elements);
        }
    });
}

const mixedArray = ['Pizza', 10, true, 25 , false ,'Wings'];

lowerCaseWords(mixedArray)
    .then(result => console.log(result))  
    .catch(error => console.log(error));
