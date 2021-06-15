const {readFile, writeFile} = require('fs');

readFile('./content/first.txt','utf-8',(err, result) => {
    if(err) {
        console.log(err);
        return
    } 
    const first = result;

    readFile('./content/second.txt', 'utf-8', (err, result) => {
        if(err) {
            console.log(err);
            return
        }
        const second = result; 
        writeFile('./content/async-result.txt',`The result : ${first} and ${second}`, (err, result) => {
            if(err) {
                console.log(err);
                return
            } else {
                console.log(result);
            }
        })
    })


    
})
